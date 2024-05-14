import React from "react";


function ProjectCard({
  image,
  projectName,
  projectDescription,
  links1,
  links2,
}) {
  return (
    <div className="w-[300px]  border border-slate-700 rounded-md flex flex-col items-center m-1">
      <div className="w-full flex">
        <img className="rounded-md" src={image} alt="" />
      </div>
      <div className="p-2 w-full flex flex-col items-center justify-center">
        <div className="w-full ml-8">
          <h1 className="text-[20px]  font-semibold ">
            {projectName}
          </h1>
        </div>
        <div className="w-[90%] text-justify">
          <span className="text-slate-300 font-thin">{projectDescription}</span>
        </div>
        {links1 ? (
          <div className="w-full flex justify-center">
            <a href={links1} target="_blank" className="bg-slate-600 w-[90%] m-1 p-2 rounded-md flex justify-center items-center space-x-1">
                <span>
                <i class="fa-brands fa-github"></i>
                </span>
                <span>GitHub</span>
            </a>
          </div>
        ) : (
          <></>
        )}
        {links2 ? (
          <div className="w-full  flex justify-center">
            <a href={links2} target="_blank" className=" bg-slate-600 w-[90%]  m-1 p-2 rounded-md flex justify-center items-center space-x-1">
                <span>
                <i class="fa-brands fa-github"></i>
                </span>
                <span>GitHub</span>
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
