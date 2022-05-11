import React from "react";

const Service = ({ service }) => {
  const { title, description, img } = service;
  return (
    <div className="card bg-base-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
