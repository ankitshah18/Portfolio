import React from "react";
import "./blog.css";

const BlogApp = () => {
  return (
    <section className="blog-app">
      <div className="Heading">
        <h1>Welcome to Blog App</h1>
        <p className="tagline">Details coming soon!</p>
      </div>
      {/* <div className="about">
        <div className="front-and-back">
          <div className="frontend">
            <h2>For FrontEnd</h2>
            <p className="front-details">
              1. React <br />
              2. CSS
            </p>
          </div>
          <div className="backend">
            <h2>For BackEnd</h2>
            <p className="back-details">
              1. Express <br />
              2. Node.js <br />
              3. MongoDb for storing data
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default BlogApp;
