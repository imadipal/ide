import CodeMirror from "@uiw/react-codemirror";
import { Button, Dropdown, Label } from "flowbite-react";
export const HomePage = () => {
  const code = "print('Welcome to Algo IDE!')";

  return (
    <>
      <div className=" mt-2 ml-2 mb-2 mr-2">
        <Dropdown label="Python" dismissOnClick={true}>
          <Dropdown.Item>Python</Dropdown.Item>
          <Dropdown.Item>C++</Dropdown.Item>
          <Dropdown.Item>Java</Dropdown.Item>
          <Dropdown.Item>JavaScript</Dropdown.Item>
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
            className=" mt-2 ml-2 mb-2 mr-2"
            value={code}
            height="80vh"
            width="auto"
            theme={"dark"}
          />
        </div>
        <div className="gap-4 grid grid-rows-2">
          <div >
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
          <Button className="mt-2 ml-2 mb-2 mr-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded">Run</Button>
          <Button className="mt-2 ml-2 mb-2 mr-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded">Submit</Button>
          </div>
          
        </div>
      </div>
    </>
  );
};
