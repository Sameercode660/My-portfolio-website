import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [position, setPosition] = useState(false);

  function handleOpenCloseNavigation() {
    setPosition((prev) => !prev);
  }
  return (
    <>
      <div className="w-full flex justify-center items-center max-sm:justify-around">
        <div className="flex w-[80%] justify-around m-2 p-1 max-sm:space-x-12 max-sm:w-full">
          <div className="">
            <h1
              className="text-3xl font-bold max-sm:text-[1.6rem]"
              style={{ fontFamily: "sans-serif" }}
            >
              Sameer's Portfolio
            </h1>
          </div>
          <div className="max-sm:hidden flex justify-center items-center space-x-10">
            <Link
              className="text-lg font-bold text-gray-300 hover:text-sky-400"
              to={"/"}
            >
              <span>Home</span>
            </Link>
            <Link
              className="text-lg font-bold text-gray-300 hover:text-sky-400"
              to={"/skills"}
            >
              <span>Skills</span>
            </Link>
            <Link
              className="text-lg font-bold text-gray-300 hover:text-sky-400"
              to={"/Projects"}
            >
              <span>Projects</span>
            </Link>
            <Link
              className="text-lg font-bold text-gray-300 hover:text-sky-400"
              to={"/contact"}
            >
              <span>Contact Me</span>
            </Link>
          </div>
          <div
            className="sm:hidden max-sm:grid place-items-center w-[2.5rem] "
            onClick={handleOpenCloseNavigation}
          >
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <Outlet></Outlet>
      </div>

      <div
        className={` sm:hidden w-[70%] h-[100vh] fixed z-100 top-0 ${
          position ? "left-0" : "left-[-70%]"
        } right-0 bottom-0 flex flex-col items-center gap-3 transition-all ease-in duration-500`}
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="w-full grid place-items-center mt-10">
          <Link
            className="text-lg font-bold text-gray-300 hover:text-sky-400 w-full p-2 grid place-items-center m-1"
            to={"/"}
          >
            <span>Home</span>
          </Link>
          <Link
            className="text-lg font-bold text-gray-300 hover:text-sky-400 w-full p-2 grid place-items-center m-1"
            to={"/skills"}
          >
            <span>Skills</span>
          </Link>
          <Link
            className="text-lg font-bold text-gray-300 hover:text-sky-400 w-full  p-2 grid place-items-center m-1"
            to={"/Projects"}
          >
            <span>Projects</span>
          </Link>
          <Link
            className="text-lg font-bold text-gray-300 hover:text-sky-400 w-full p-2 grid place-items-center m-1"
            to={"/contact"}
          >
            <span>Contact Me</span>
          </Link>
          <button
            className="grid place-items-center w-[40px] h-[40px] rounded-full bg-slate-500"
            onClick={handleOpenCloseNavigation}
          >
            <i class="fa-solid fa-xmark text-[25px]"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
