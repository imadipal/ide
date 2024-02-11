import CodeMirror from "@uiw/react-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import { Button, Dropdown, Label } from "flowbite-react";
import { FormEvent, useState } from "react";
import { ProblemDescription } from "./Components/problemDescription";
import { Problem } from "../utils/problem";

type WorkspaceProps = {
  problem: Problem;
};
export const QuestionPage: React.FC<WorkspaceProps> = ({ problem }) => {
  const [code, setCode] = useState(`print('Welcome to Algo IDE!')`);
  const [lang, setLang] = useState("python");
  const [selectedLanguage, setSelectedLanguage] = useState("Python");
  const handleOnChange = (event: FormEvent<HTMLButtonElement>) => {
    const e = document.getElementById("dropdown") as HTMLInputElement;
    setLang(e.value);
    console.log(lang);
    const newLanguage = (event.currentTarget as HTMLButtonElement).value;
    setSelectedLanguage(newLanguage);
  };
  const onChange = (value: string) => {
    setCode(value);
  };

  return (
    <>
      <div className=" m-2">
        <Dropdown
          id="dropdown"
          label={selectedLanguage}
          dismissOnClick={true}
          onChange={handleOnChange}
          defaultValue={"python"}
        >
          <Dropdown.Item value={"python"}>Python</Dropdown.Item>
          <Dropdown.Item value={"cpp"}>C++</Dropdown.Item>
          <Dropdown.Item value={"java"}>Java</Dropdown.Item>
          <Dropdown.Item value={"jsx"}>JavaScript</Dropdown.Item>
        </Dropdown>
      </div>
      <div className="grid gap-4 grid-cols-2 col-span-2">
        <ProblemDescription problem={problem} />

        <div className="bg-dark-fill-2">
          <div>
            <div className="">
              <Label className=" font-bold m-2" htmlFor="code" value="Code" />
              <CodeMirror
                className=" m-2"
                value={code}
                height="80vh"
                width="auto"
                theme={"dark"}
                onChange={onChange}
              />
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
                  height="auto"
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
                  height="auto"
                  width="auto"
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
        </div>
      </div>
    </>
  );
};
