import React from "react";
const CardReview = (props) => {
  return (
    <>
      <div className="card-review">
        <h3 className="card-title-review">{props.title}</h3>
        <p className="user-review">{props.review}</p>
        <div className="user">
          <img src={props.img} alt={props.alt} />
          <div className="user-name">
            <h5>{props.name}</h5>
            <p>{props.as}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardReview;
