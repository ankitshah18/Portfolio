import React, { useState } from "react";
import "./contact.css";
import CustomAlert from "./CustomAlert";
import javas from "../../assets/js.png";
import csss from "../../assets/css3.png";
import htmll from "../../assets/html5.png";
import react from "../../assets/react.png";
import linkdin from "../../assets/linkedin.png";
import github from "../../assets/github1.png";
import leetcode from "../../assets/leetcode.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r2sjcho",
        "template_pw597eh",
        form.current,
        "LQzQ5Wq6NWU_oVEUC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlertMessage("Message Sent");
          setShowAlert(true);
        },
        (error) => {
          console.log(error.text);
          setAlertMessage("Message Failed to Send");
          setShowAlert(true);
        }
      );
    e.target.reset();
  };

  return (
    <section id="skillPage">
      <div id="skills">
        <h1 className="skillPageTitle"> Skills</h1>
        <p className="skillDesc">Some of My SKills are...</p>
        {/* <div className="skillsImg"> */}
        <div className="skillBox">
          <img src={react} alt="React" className="skillImg" />
          <img src={javas} alt="Javascript" className="skillImg" />
          <img src={csss} alt="HTML" className="skillImg" />
          <img src={htmll} alt="HTML" className="skillImg" />
        </div>

        {/* </div> */}
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please send me mail if you have any opportunities for me by filling
          out the form
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="msg"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          {showAlert && (
            <CustomAlert
              message={alertMessage}
              onClose={() => setShowAlert(false)}
            />
          )}

          <div className="links">
            <img
              src={linkdin}
              alt="Linkedin"
              className="link"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/ankit-shah-34bb07118/"
                );
              }}
            />
            <img
              src={github}
              alt="Github"
              className="link"
              onClick={() => {
                window.open("https://github.com/ankitshah18");
              }}
            />
            <img
              src={leetcode}
              alt="LeetCode"
              className="link"
              onClick={() => {
                window.open("https://leetcode.com/ankitshahankit181/");
              }}
            />
            {/* <img src={Twitter} alt="Github" className="link" /> */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
