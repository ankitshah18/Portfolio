import React from "react";
import "./intro.css";
import { TiDocumentText } from "react-icons/ti";
// import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";
import resume from "../../assets/resume.pdf";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Ankit Shah</span> <br /> Software
          Developer <span className="line"></span>{" "}
          <p className="introPara">A person who loves coding.</p>
        </span>
        <Link>
          {/* <button className="btn">
            <img src={btnImg} alt="" className="btnImg" />
            Hire Me
          </button> */}
          <button
            className="Resumebtn"
            onClick={() => {
              window.open(resume);
            }}
          >
            <TiDocumentText size={20} /> Download Resume
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
