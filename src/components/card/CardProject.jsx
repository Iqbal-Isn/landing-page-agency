import React from "react";
import project1 from "../../assets/img/project-1.png";

const CardProject = (props) => {
  return (
    <>
      <div className="card-project">
        <img src={props.img} alt={props.alt} />
        <h2 className="card-title">{props.title}</h2>
        <p className="card-desc">{props.desc}</p>
      </div>
    </>
  );
};

export default CardProject;
