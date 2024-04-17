import React from "react";
import logo from '../assets/sample.jpeg'

function Home() {
  return (
    <>
      <div className="flex items-center h-[90dvh] w-full justify-evenly">
        <div className="flex flex-col space-y-10">
          <h1 className="text-6xl font-semibold " style={{
            color: 'white',
            textShadow: '0 0 5px cyan, 0 0 10px cyan, 0 0 15px cyan, 0 0 20px cyan, 0 0 30px cyan, 0 0 40px cyan, 0 0 50px cyan, 0 0 75px cyan'
          }}>Hii, <span className="">I'm Sameer</span></h1>
          <h2 className="text-2xl stroke-yellow-300">I am a Full Stack web Developer</h2>
          <p className="text-justify">My name is Mohd Sameer, currently i am pursuing my graduation <br /> and also i am a mern stack web developer, fascinated for developing <br></br> good web application</p>
          <div>
            <button className="w-[130px] p-2 border-2 border-cyan-400 rounded-md transition-all hover:bg-cyan-400">Resume</button>
          </div>
        </div>
        <div>
          <img style={{
            color: 'cyan',
            boxShadow: '0 0 5px cyan, 0 0 10px cyan, 0 0 15px cyan, 0 0 20px cyan, 0 0 30px cyan, 0 0 40px cyan, 0 0 50px cyan, 0 0 75px cyan'
          }} className="w-[300px] h-[300px] border-2 rounded-full object-cover" src={logo}  alt="" />
        </div>
      </div>

    </>
  );
}

export default Home;
