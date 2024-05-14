import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import tweetHub from '../assets/tweetHub.png'
import blogApp from '../assets/blogApp.png'
import result from '../assets/result.png'
import usolution from '../assets/usolution.png'

function Project() {
  const [data, setData] = useState([
    {
      image: tweetHub,
      projectName: "TweetHub",
      projectDescription:
        "A social Media application like Twitter, it has the feature for user to upload image with tweets, chat with each other follower and following and other fearture, like, comments etc.",
      links1: "https://github.com/Sameercode660/project_clg_frontend",
      links2: "https://github.com/Sameercode660/project_clg",
    },
    {
      image: blogApp,
      projectName: "Ancient Bharat",
      projectDescription:
        "A Blog web application, related to the history of india where a user can post a blog, can also read the blog, also there is an option to share the thoughts on each blog of any user",
      links1: "https://github.com/Sameercode660/Blog-App-frontend",
      links2: "https://github.com/Sameercode660/Blog-App-backend",
    },
    {
      image: usolution,
      projectName: "Usolution",
      projectDescription:
        "is a static application built using react that serves the assignment solution of a course to the student specially the program related to lab book of a particular couse semester wise, ",
      links1: "https://github.com/Sameercode660/Usolution",
      links2: "https://github.com/Sameercode660/Usolution",
    },
    {
      image: result,
      projectName: "Result System",
      projectDescription:
        "It is a result management system where a student can download its academic result by just entering his mother name and rollnumber with his/her course and semester ",
      links1: "https://github.com/Sameercode660/uniResultPdf-frontend-",
      links2: "https://github.com/Sameercode660/uniResultpdfProject-backend-",
    },
  ]);
  return (
    <>
      <div className="flex justify-center items-center flex-wrap flex-col mt-20">
        <div>
          <h1 className="text-[50px] text-slate-300 font-thin">My Projects</h1>
        </div>
        <div className="flex justify-center items-center flex-wrap">
          {data.map((project) => (
            <ProjectCard
              image={project.image}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              links1={project.links1}
              links2={project.links2}
            ></ProjectCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
