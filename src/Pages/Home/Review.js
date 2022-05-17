import React from "react";

const Review = ({ review }) => {
  const { name, comments, address, img } = review;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{comments}</p>
        <div className="flex items-center py-4">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h2 className="card-title">{name}</h2>
            <h4>{address}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
