import React, { useContext } from "react";
import "./works.css";
import workData from "./WorkData";
// import { AppContext } from "../Context/ApiContext";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/ApiContext";

const Works = () => {
  const { setSingleWork } = useContext(AppContext);
  const handleClick = (item) => {
    setSingleWork(item);
  };
  return (
    <section id="projects">
      <h2 className="projectsTitle"> PROJECTS</h2>
      <div className="projectsGrid">
        {workData.map((item, index) => (
          <div className="projectCard" key={index}>
            <h3 className="projectName">{item.name}</h3>
            <div className="img-link">
              {typeof item.image === "string" ? (
                <>
                  <img src={item.image} alt={`${item.name} preview`} />{" "}
                </>
              ) : (
                item.image
              )}
            </div>
            <a href={item.link} className="project-link">
              Check Live Project
            </a>

            <p>{item.description}</p>
            <Link
              to={`/SingleWork/${item.name.replace(" ", "-").toLowerCase()}`}
            >
              <button className="read-more" onClick={() => handleClick(item)}>
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
