import React from "react";
import logo from '../assets/sample.jpeg'

function Home() {
  return (
    <>
      <div className="flex items-center h-[90dvh] max-sm:h-auto relative top-10 w-full justify-evenly max-sm:flex-col-reverse max-sm:gap-10">
        <div className="flex flex-col space-y-10 max-sm:space-y-5 max-sm:items-center max-sm:m-1">
          <h1 className="text-6xl max-sm:text-4xl font-semibold" style={{
            color: 'white',
            textShadow: '0 0 5px cyan, 0 0 10px cyan, 0 0 15px cyan, 0 0 20px cyan, 0 0 30px cyan, 0 0 40px cyan, 0 0 50px cyan, 0 0 75px cyan'
          }}>Hii, <span className="">I'm Sameer</span></h1>
          <h2 className="text-2xl max-sm:text-sm max-sm:font-semibold stroke-yellow-300">I am a Full Stack web Developer</h2>
          <p className="max-sm:hidden text-justify">My name is Mohd Sameer, currently i am pursuing my graduation <br /> and also i am a mern stack web developer, fascinated for developing <br></br> good web application</p>
          <p className="sm:hidden text-justify max-sm:font-semibold m-5">My name is Mohd Sameer, currently i am pursuing my graduation and also i am a mern stack web developer, fascinated for developing good web application</p>
          <div>
            <a href="https://drive.google.com/file/d/1tr3SSGK0PRQZzp0M_xTLt14IoR0BrpXX/view?usp=drive_link" target="_blank" className=" grid place-items-center w-[130px] p-2 border-2 border-cyan-400 rounded-md transition-all hover:bg-cyan-400">Resume</a>
          </div>
        </div>
        <div>
          <img style={{
            color: 'cyan',
            boxShadow: '0 0 5px cyan, 0 0 10px cyan, 0 0 15px cyan, 0 0 20px cyan, 0 0 30px cyan, 0 0 40px cyan, 0 0 50px cyan, 0 0 75px cyan'
          }} className=" w-[400px] h-[400px]  max-sm:w-[200px] max-sm:h-[200px] border-2 rounded-full object-cover" src={logo}  alt="" />
        </div>
      </div>

    </>
  );
}

export default Home;
