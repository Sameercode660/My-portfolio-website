import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-full flex justify-center items-center max-sm:justify-around border-2 border-red-500">
        <div className="flex w-[80%] justify-around m-2 p-1" >
          <div className="max-sm:border-2 max-sm:border-red-500">
            <h1 className="text-3xl font-bold max-sm:text-[1.6rem]" style={{ fontFamily: 'sans-serif' }}>Sameer's Portfolio</h1>
          </div>
          <div className="max-sm:hidden flex justify-center items-center space-x-10">
            <Link className="text-lg font-bold text-gray-300 hover:text-sky-400" to={"/"}>
              <span>Home</span>
            </Link>
            <Link className="text-lg font-bold text-gray-300 hover:text-sky-400" to={"/skills"}>
              <span>Skills</span>
            </Link>
            <Link className="text-lg font-bold text-gray-300 hover:text-sky-400" to={"/Projects"}>
              <span>Projects</span>
            </Link>
            {/* <Link className="text-lg font-bold text-gray-300 hover:text-sky-400" to={"/About"}>
            <span>About</span>
          </Link> */}
            <Link className="text-lg font-bold text-gray-300 hover:text-sky-400" to={"/contact"}>
              <span>Contact Me</span>
            </Link>
          </div>
          <div className="sm:hidden max-sm:grid place-items-center max-sm:border-2 max-sm:border-red-500 w-[2.5rem] ">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <Outlet></Outlet>
      </div>
    </>

  );
}

export default App;
