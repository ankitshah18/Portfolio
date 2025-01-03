import React from "react";
import "./Netflix.css";
import logo from "../../assets/netflix-logo.png";
const Netflix = () => {
  return (
    <div className="single-work">
      <div className="title-img">
        <h2>Netflix Clone</h2>
        <img src={logo} alt="" />
      </div>
      <div className="description">
        <h3>Description</h3>
        <p>
          Developed a feature-rich Netflix clone using the MERN stack (MongoDB,
          Express, React, Node.js) to deliver a seamless and immersive streaming
          experience. The application mimics key Netflix functionalities and
          offers an intuitive interface for exploring, searching, and enjoying
          movie and TV show trailers.
        </p>
      </div>
      <div className="about-project">
        <h3>Key Features</h3>
        <p>
          Dynamic Content Integration: Leveraged the TMDB API to fetch and
          display movie and TV show titles, posters, descriptions, and trailers.
        </p>
        <p>
          Enhanced Search Capabilities: Implemented a robust search
          functionality enabling users to find movies, TV shows, and actors
          effortlessly.
        </p>
        <p>
          Secure Authentication: Built a secure login and signup system using
          JWT and bcrypt to ensure safe user management and data protection.
        </p>
        <p>
          User-Centric UI Design: Created a responsive, visually appealing, and
          intuitive interface for browsing, searching, and viewing trailers.
        </p>
        <p>
          Optimized State Management: Utilized Zustand for lightweight and
          efficient state management, improving the performance and scalability
          of React components.
        </p>
      </div>
      <div className="tech">
        <h3>Technologies Used</h3>
        <p>Frontend: React.js for building interactive UI components.</p>
        <p>
          Backend: Node.js and Express.js for handling API requests and managing
          server-side logic.
        </p>
        <p>Database: MongoDB for storing user data securely.</p>
        <p>
          Authentication: JWT and bcrypt for secure user authentication and data
          encryption.
        </p>
        <p>
          State Management: Zustand for efficient and easy-to-use state
          handling.
        </p>
      </div>
      <div className="outcome">
        <h3>Outcome</h3>
        <p>
          This Netflix clone provides a comprehensive platform for users to
          explore a vast collection of movies and TV shows, search by specific
          titles or actors, and watch trailers in a user-friendly environment.
          The integration of secure authentication and optimized state
          management ensures a smooth and reliable user experience.
        </p>
      </div>
    </div>
  );
};

export default Netflix;
