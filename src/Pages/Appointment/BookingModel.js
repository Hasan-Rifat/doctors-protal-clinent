import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const BookingModel = ({ treatment, date, setTreatment, refetch }) => {
  const [user, loading, error] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const formatDate = format(date, "PP");
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formatDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: e.target.phone.value,
    };
    fetch("https://doctors-portal-server-1.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(`Appointment is set, ${formatDate} at ${slot}`);
        } else {
          toast.error(
            `you all Ready have a appointment, ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        setTreatment(null);
        refetch();
      });
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
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              disabled
              value={user?.email || ""}
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
