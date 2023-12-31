import React from "react";
import "./works.css";

import blog from "../../assets/blogging.png";

const Works = () => {
  return (
    <section id="projects">
      <h2 className="projectsTitle">My Projects</h2>
      <span className="projectDesc">
        A web app enables users to create, read and update blog posts. It
        features a responsive frontend built with React, a backend powered by
        Express and Node.js, and MongoDB for storing blog data
      </span>
      <div className="projectsImgs">
        <h1>Blog App</h1>
        <img src={blog} alt="" className="projectImg" />
        <button className="ReadMore">
          <a href="/BlogApp">Read More</a>
        </button>
      </div>

      <button className="projectsBtn">
        <a href="/BlogApp">See More</a>
      </button>
    </section>
  );
};

export default Works;
