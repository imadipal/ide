import CodeMirror from "@uiw/react-codemirror";
import CodeEditor from '@uiw/react-textarea-code-editor';
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import { Button, Dropdown, Label } from "flowbite-react";
import { FormEvent, useState } from "react";
export const HomePage = () => {
    const [code, setCode] = useState(
        `print('Welcome to Algo IDE!')`
      );
  const [lang,setLang]=useState("python");
  const [selectedLanguage, setSelectedLanguage] = useState('Python');
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
          <CodeEditor
          className="m-2 h-5/6 max-h-screen"
          value={code}
          data-color-mode="dark"
          language={lang}
          placeholder="Please enter code."
          onChange={(evn) => setCode(evn.target.value)}
          style={{
            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',

          }}/>
        </div>
        <div className="gap-4 grid grid-rows-2">
          <div>
            <Label
              className=" font-bold m-2"
              htmlFor="input"
              value="Input"
            />
            <CodeMirror
              className=" m-2"
              value={""}
              height="36vh"
              width="auto"
              theme={"dark"}
            />
          </div>
          <div>
            <Label
              className=" font-bold m-2"
              htmlFor="output"
              value="Output"
            />
            <CodeMirror
              className=" m-2"
              value={""}
              height="36vh"
              width=""
              theme={"dark"}
            />
          </div>
          <div className="grid gap-4 grid-cols-2">
            <Button className="m-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded">
              Run
            </Button>
            <Button className="m-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
