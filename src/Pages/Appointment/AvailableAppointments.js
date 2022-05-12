import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModel from "./BookingModel";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [services, setService] = useState();
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);
  return (
    <div className="text-center">
      <h4 className="text-secondary  py-8 font-semibold text-xl">
        Available Appointments on {format(date, "PP")}.
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModel
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
