import { format } from "date-fns";
import React from "react";

const BookingModel = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    console.log(_id, slot, name, email, phone);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Booking for : {name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-3 text-accent"
          >
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              placeholder="Email address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              placeholder="Type here"
              className="btn btn-secondary w-full max-w-xs"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModel;
