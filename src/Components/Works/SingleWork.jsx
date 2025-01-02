import React, { useContext } from "react";
import "./SingleWork.css";
import { AppContext } from "../Context/ApiContext";
const SingleWork = () => {
  const { SingleWork } = useContext(AppContext);

  return (
    <div className="single-work">
      <div className="title-img">
        <h2>{SingleWork.name}</h2>
        <img src={SingleWork.image} alt="" />
      </div>
      <p>Details coming soon!</p>
    </div>
  );
};

export default SingleWork;
