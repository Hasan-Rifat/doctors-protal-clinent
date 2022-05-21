import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card shadow-xl py-10">
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p className="text-[14px] ">
          {slots.length > 0 ? (
            <span className="text-black">{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try anther day</span>
          )}{" "}
        </p>
        <p className="text-black text-[12px] ">
          {slots.length} {slots.length > 1 ? "SPACES AVAILABLE" : "SPACE"}
        </p>
        <p>
          <small>Price : ${price}</small>
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary uppercase text-white font-semibold bg-gradient-to-r from-secondary to-primary px-6 text-lg"
            onClick={() => setTreatment(service)}
          >
            Book appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
