import subprocess
from django.shortcuts import render
from django.http import HttpResponse
import sys
import json
import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

def greetings(request):
    res = render(request,'index.html')
    return res
@csrf_exempt
def execute(request):
    if request.method == 'POST':
        code = request.POST.get('code', '')
        user_input = request.POST.get('user_input', '')

        # Combine code and user input for execution
        full_code = f"{code}\nuser_input = '{user_input}'"

        try:
            result = subprocess.check_output(['python', '-c', full_code], stderr=subprocess.STDOUT, text=True)
            return JsonResponse({'output': result}, status=200)
        except subprocess.CalledProcessError as e:
            return JsonResponse({'error': e.output}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=400)

def runcode(request):
    if request.method == 'POST':
        code_part = request.POST['code_area']
        input_part = request.POST['input_area']
        y = input_part
        input_part = input_part.replace("\n"," ").split(" ")
        def input():
            a = input_part[0]
            del input_part[0]
            return a
        try:
            orig_stdout = sys.stdout
            sys.stdout = open('file.txt', 'w')
            exec(code_part)
            sys.stdout.close()
            sys.stdout=orig_stdout
            output = open('file.txt', 'r').read()
        except Exception as e:
            sys.stdout.close()
            sys.stdout=orig_stdout
            output = e
        print(output)
    res = render(request,'home.html',{"code":code_part,"input":y,"output":output})
    return res

@csrf_exempt
def evaluate_code(request):
    if request.method == 'POST':
        code = request.POST['code_area']

        # Change the url where golang server will be deployed
        oj_server_url = 'http://localhost:8080/evaluate'

        payload = {'code': code}

        try:
            response = requests.post(oj_server_url, json=payload)
            data = json.loads(response.text)
            return JsonResponse(data)
        except requests.RequestException as e:
            return JsonResponse({'success': False, 'error': str(e)})

    return JsonResponse({'success': False, 'error': 'Invalid request method'})
