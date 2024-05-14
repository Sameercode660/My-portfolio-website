import React from "react";

function Skills() {
  return (
    <div className="w-full h-[93dvh] flex justify-center items-center flex-col flex-wrap">
      <div>
        <h1 className="text-[30px] font-semibold text-gray-300">Skills</h1>
      </div>
      <div className="flex flex-wrap">
        <div className="w-[200px] border-cyan-400 border-2 rounded h-[300px] m-2 p-4 flex flex-col justify-start items-center space-y-2">
          <div>
            <h1 className="text-[25px] font-semibold text-gray-300 font-serif">
              Frontend
            </h1>
          </div>
          <div>
            <span className="text-[16px] font-semibold text-gray-300">
              HTML
            </span>
          </div>
          <div>
            <span className="text-[16px] font-semibold text-gray-300">CSS</span>
          </div>
          <div>
            <span className="text-[16px] font-semibold text-gray-300">
              JavaScript
            </span>
          </div>
          <div>
            <span className="text-[16px] font-semibold text-gray-300">
              React.js
            </span>
          </div>
          <div>
            <span className="text-[16px] font-semibold text-gray-300">
              Redux
            </span>
          </div>
          <div>
            <span className="text-[16px] font-semibold text-gray-300">
              Tailwind
            </span>
          </div>
        </div>
        <div className="w-[200px] border-cyan-400 border-2 rounded h-[300px] m-2 p-4 flex flex-col justify-start items-center space-y-2">
          <div>
            <h1 className="text-[25px] font-semibold text-gray-300 font-serif">
              Backend
            </h1>
          </div>
          <div>
            <span className="text-[16px] font-semibold text-gray-300">
              Node.js
            </span>
          </div>
          <div>
            <span className="text-[16px] font-semibold text-gray-300">
              Express.js
            </span>
          </div>
          <div>
            <span className="text-[16px] font-semibold text-gray-300">
              RESTful APIs
            </span>
          </div>
          <div>
            <h1 className="text-[16px] font-semibold text-gray-300">
              Databases
            </h1>
          </div>
          <div>
            <span className="text-[16px] font-semibold text-gray-300">
              MongoDB
            </span>
          </div>
          <div>
            <span className="text-[16px] font-semibold text-gray-300">
              Mongoose
            </span>
          </div>
        </div>
        <div className="w-[200px] border-cyan-400 border-2 rounded h-[300px] m-2 p-4 flex flex-col justify-start items-center space-y-2">
          <div>
            <h1 className="text-[25px] font-semibold text-gray-300 font-serif">
              Tools&others
            </h1>
          </div>
          <div>
            <span className="text-[16px] font-semibold text-gray-300">Git</span>
          </div>
          <div>
            <span className="text-[16px] font-semibold text-gray-300">
              GitHub
            </span>
          </div>
          <div>
            <span className="text-[16px] font-semibold text-gray-300">
              Postman
            </span>
          </div>
          <div>
            <span className="text-[16px] font-semibold text-gray-300">
              React Native
            </span>
          </div>
          <div>
            <span className="text-[16px] font-semibold text-gray-300">
              Chakra UI
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
