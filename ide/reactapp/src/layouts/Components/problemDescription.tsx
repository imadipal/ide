import RectangleSkeleton from "./RectangleSkeleton";
import CircleSkeleton from "./CircleSkeleton";
import { Problem } from "../../utils/problem";
import { Label } from "flowbite-react";

type ProblemDescriptionProps = {
  problem: Problem;
};
export const ProblemDescription: React.FC<ProblemDescriptionProps> = ({
  problem,
}) => {
  return (
    <>
      <div className="bg-dark-layer-1">
      <Label className=" font-bold m-2" htmlFor="code" value="Description" />
        <div className="flex bg-neutral-800 rounded m-2 h-[calc(100vh)] overflow-y-auto ">
        <div className="flex m-2  ">
          <div className="px-5">
            {/* Problem heading */}
            <div className="w-full">
              <div className="flex space-x-4">
                <div className="flex-1 mr-2 text-lg text-white font-medium">
                  {problem?.title}
                </div>
              </div>

              {
                <div className="mt-3 flex space-x-2">
                  <RectangleSkeleton />
                  <CircleSkeleton />
                  <RectangleSkeleton />
                  <RectangleSkeleton />
                  <CircleSkeleton />
                </div>
              }

              {/* Problem Statement(paragraphs) */}
              <div className="text-white text-sm">
                <div
                  dangerouslySetInnerHTML={{ __html: problem.problemStatement }}
                />
              </div>

              {/* Examples */}
              <div className="mt-4">
                {problem.examples.map((example, index) => (
                  <div key={example.id}>
                    <p className="font-medium text-white ">
                      Example {index + 1}:{" "}
                    </p>
                    <div className="example-card ">
                      <pre>
                        <strong className="text-white">Input: </strong>{" "}
                        <div className="text-white">{example.inputText}</div>
                        <br />
                        <strong className="text-white">Output:</strong>
                        <div className="text-white">
                          {example.outputText}
                        </div>{" "}
                        <br />
                        {example.explanation && (
                          <>
                            <strong className="text-white">Explanation:</strong>{" "}
                            <div className="text-white">
                              {example.explanation}
                            </div>
                          </>
                        )}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>

              {/* Constraints */}
              <div className="my-8 pb-4">
                <div className="text-white text-sm font-medium">
                  Constraints:
                </div>
                <ul className="text-white ml-5 list-disc ">
                  <div
                    dangerouslySetInnerHTML={{ __html: problem.constraints }}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
