import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <h2>WORK EXPERIENCE</h2>

      <div className="experience-description">
        <h3>AVTECHFIN (27th Dec 23 - 27th Apr 24) </h3>
        <a
          href="https://drive.google.com/file/d/1fn01ck76Np0rt6BSbJTBeShn9fMGi3k1/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "underline",
            color: "blue",
            fontWeight: "200",
            cursor: "pointer",
            textUnderlineOffset: "5px",
          }}
        >
          View Certificate
        </a>
        <div className="about-exp">
          {" "}
          <p>
            ● Developed admin panel. Using MERN stack(MongoDB, Express.js,
            React, Node.js).
          </p>
          <p> ● Implemented user authentication and authorization.</p>
          <p>
            {" "}
            ● Used Playwright and Selenium libraries to scrape data from various
            sources. Automated data extraction process to enhance efficiency.
          </p>
          <p>
            ● Designed and developed customer forms for the company website.
            Ensured forms were user friendly and responsive.
          </p>
          <p>
            {" "}
            ● Worked closely with the development team to ensure seamless
            integration of new features.
          </p>
          <p>
            ● Participated in regular meetings and provided updates on project
            progress.
          </p>
        </div>
        <hr />
        <h3>
          FREELANCE PROJECT: StreetWorldz Foundation Website (Sep'24 - Jan'25)
        </h3>
        <div className="about-exp">
          <a
            href="https://streetworldz.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "underline",
              color: "blue",
              fontWeight: "200",
              cursor: "pointer",
              textUnderlineOffset: "5px",
            }}
          >
            Check out the website here.
          </a>

          <p>
            <span>Description</span>: Developed a full-stack website for an NGO
            dedicated to animal rescue and donation campaigns.{" "}
          </p>
          <p>
            <span>Frontend</span> : Built using React.js, implemented features
            with React Context API, and utilized useState and useEffect hooks
            for state management and API calls.
          </p>
          <p>
            <span>Backend</span>: Created a RESTful API using Express.js and
            MongoDB for data storage, ensuring seamless integration with the
            frontend.
          </p>
          <p>
            <span>Payment Gateway</span>: Integrated Razorpay for secure and
            user-friendly donation transactions, supporting targeted campaigns.{" "}
          </p>
          <p>
            <span>Deployment</span>: Hosted the backend on Render and the
            frontend on Netlify; final deployment planned on GoDaddy with a
            custom domain.{" "}
          </p>
          <h5>Key Features</h5>
          <div className="key-f">
            {" "}
            <p>Campaign-specific donation tracking.</p>
            <p>Persistent progress bar for donations using backend state.</p>
            <p>Fully responsive design optimized for user experience </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
