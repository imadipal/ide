import CodeMirror from "@uiw/react-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import { Button, Dropdown, Label } from "flowbite-react";
import { FormEvent, useState } from "react";
export const HomePage = () => {
  const code = "print('Welcome to Algo IDE!')";
  const [lang,setLang]=useState("python");
  const [selectedLanguage, setSelectedLanguage] = useState('Python');

  const options = {
    lineNumbers: true,
    mode: {lang},
    extraKeys: { "Ctrl-Space": "autocomplete" },
  };
  const handleOnChange=  (event: FormEvent<HTMLButtonElement>) =>{
    const e=(document.getElementById("dropdown") as HTMLInputElement);
    setLang(e.value);
    const newLanguage = (event.currentTarget as HTMLButtonElement).value;
    setSelectedLanguage(newLanguage);
  }
  return (
    <>
      <div className=" mt-2 ml-2 mb-2 mr-2">
        <Dropdown  id="dropdown" label={selectedLanguage} dismissOnClick={true} onChange={handleOnChange} defaultValue={"python"}>
          <Dropdown.Item value={"python"}>Python</Dropdown.Item>
          <Dropdown.Item value={"cpp"}>C++</Dropdown.Item>
          <Dropdown.Item value={"java"}>Java</Dropdown.Item>
          <Dropdown.Item value={"jsx"}>JavaScript</Dropdown.Item>
        </Dropdown>
      </div>
      <div className="grid gap-4 grid-cols-2 col-span-2">
        <div className="">
          <Label
            className=" font-bold mt-2 ml-2 mb-2 mr-2"
            htmlFor="code"
            value="Code"
          />
          <CodeMirror
            options={options}
            className=" mt-2 ml-2 mb-2 mr-2"
            value={code}
            height="80vh"
            width="auto"
            theme={"dark"}
          />
        </div>
        <div className="gap-4 grid grid-rows-2">
          <div>
            <Label
              className=" font-bold mt-2 ml-2 mb-2 mr-2"
              htmlFor="input"
              value="Input"
            />
            <CodeMirror
              className=" mt-2 ml-2 mb-2 mr-2"
              value={""}
              height="30vh"
              width="auto"
              theme={"dark"}
            />
          </div>
          <div>
            <Label
              className=" font-bold mt-2 ml-2 mb-2 mr-2"
              htmlFor="output"
              value="Output"
            />
            <CodeMirror
              className=" mt-2 ml-2 mb-2 mr-2"
              value={""}
              height="30vh"
              width=""
              theme={"dark"}
            />
          </div>
          <div className="grid gap-4 grid-cols-2">
            <Button className="mt-2 ml-2 mb-2 mr-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded">
              Run
            </Button>
            <Button className="mt-2 ml-2 mb-2 mr-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
