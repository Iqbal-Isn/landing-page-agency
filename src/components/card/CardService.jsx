import React from "react";

const CardService = (props) => {
  return (
    <>
      <div className="card-service">
        <img src={props.img} alt={props.alt} />
        <h4 className="card-title">{props.title}</h4>
        <p className="card-desc">{props.description}</p>
      </div>
    </>
  );
};

export default CardService;
