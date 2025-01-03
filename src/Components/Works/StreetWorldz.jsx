import React from "react";
import "./StreetWorldz.css";
import { FaDog } from "react-icons/fa6";

const StreetWorldz = () => {
  return (
    <div className="single-work-container">
      <div className="title-img-container">
        <h2>StreetWorldz</h2>
        <div className="logo-animal-container">
          <FaDog size={50} />
        </div>
      </div>
      <div className="description-container">
        <h3>Description</h3>
        <p>
          Developed a comprehensive full-stack website for StreetWorldz, an NGO
          focused on animal rescue and donation campaigns. The platform empowers
          users to contribute to specific campaigns while ensuring a seamless
          and secure experience.
        </p>
      </div>
      <div className="about-project-container">
        <h3>Key Features</h3>
        <p>
          Campaign-Specific Donation Tracking: Allows users to track donations
          for individual campaigns in real-time, fostering transparency and
          trust.
        </p>
        <p>
          Persistent Progress Bar: Implemented a backend-powered state to
          maintain donation progress, ensuring data consistency even after
          reloads.
        </p>
        <p>
          Responsive Design: Optimized for all devices, providing an intuitive
          and user-friendly interface across screens.
        </p>
      </div>
      <div className="tech-container">
        <h3>Technologies Used</h3>
        <h4>FRONTEND DEVELOPMENT:</h4>
        <p>
          Built with React.js to deliver a dynamic and interactive user
          experience.
        </p>
        <p>
          Utilized React Context API for efficient state management and seamless
          data sharing across components.
        </p>
        <p>
          Implemented useState and useEffect hooks for handling component state
          and API calls.
        </p>
        <h4>BACKEND DEVELOPMENT:</h4>
        <p>
          Designed a robust RESTful API with Express.js and MongoDB for reliable
          data storage and backend logic.
        </p>
        <p>
          Ensured smooth integration with the frontend for real-time updates and
          interactions.
        </p>
        <h4>PAYMENT INTEGRATION:</h4>
        <p>
          Integrated Razorpay as the payment gateway, offering secure and
          user-friendly donation processing.
        </p>
        <p>
          Supported targeted campaigns to allow users to donate directly to
          causes they care about.
        </p>
        <h4>DEPLOYMENT:</h4>
        <p>
          Hosted the frontend on Netlify and the backend on Render for initial
          staging.
        </p>
        <p>
          Final deployment planned on GoDaddy with a custom domain to enhance
          accessibility and branding.
        </p>
      </div>
      <div className="outcome-container">
        <h3>Impact</h3>
        <p>
          The StreetWorldz Foundation Website serves as a vital platform for
          supporting animal rescue efforts, enabling secure donations, and
          providing transparent campaign tracking. This project demonstrates
          expertise in full-stack development, API integration, and creating
          scalable, user-centric web solutions.
        </p>
      </div>
    </div>
  );
};

export default StreetWorldz;
