import React from "react";
import "./Education.css";
import UIDesign from "../../assets/ui-design.png";
import graduate from "../../assets/grad1.png";
import book from "../../assets/12th.png";
import WebDesign from "../../assets/website-design.png";
import school from "../../assets/school.png";

const Education = () => {
  return (
    <section id="About-Education">
      <span className="aboutTitle">About</span>
      <span className="aboutDesc">
        Hi there! I'm Ankit Shah, a passionate and dedicated learner in the
        world of software development. My journey in the tech field began in
        June 2023 when I delved into the exciting realm of Data Structures and
        Algorithms (DSA). I'm continuously expanding my problem-solving
        abilities and honing my logical thinking skills
      </span>
      <div className="EducationBars">
        <div className="EducationBar">
          <img src={graduate} alt="UIDesign" className="EducationBarImg" />
          <div className="EducationBarText">
            <h2>IGNOU</h2>
            <p>Bachelor Of Computer Applications.</p>
            <p>2019 - 2023</p>
          </div>
        </div>
        <div className="EducationBar">
          <img src={school} alt="WebDesign" className="EducationBarImg" />
          <div className="EducationBarText">
            <h2>Kendriya Vidyalaya </h2>
            <p>12th | CBSE | 80% </p>
            <p>2018-2019 </p>
          </div>
        </div>
        <div className="EducationBar">
          <img src={school} alt="AppDesign" className="EducationBarImg" />
          <div className="EducationBarText">
            <h2>Kendriya Vidyalaya </h2>
            <p>10th | CBSE | 80%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
