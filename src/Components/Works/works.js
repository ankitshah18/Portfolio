import React, { useContext } from "react";
import "./works.css";
import workData from "./WorkData";
import { LuExternalLink } from "react-icons/lu";
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
              {" "}
              <img src={item.image} alt={`${item.name} preview`} />{" "}
              <LuExternalLink style={{ cursor: "pointer" }} />
            </div>

            <p>{item.description}</p>
            <Link to="/SingleWork">
              {" "}
              <button className="btn" onClick={() => handleClick(item)}>
                Read More{" "}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
