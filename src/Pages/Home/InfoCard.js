import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div className="">
      <div className={`card card-side shadow-xl p-5 ${bgClass}`}>
        <figure>
          <img src={img} alt="Movie" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{cardTitle}</h2>
          <p>Click the button to watch on Jetflix app.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
