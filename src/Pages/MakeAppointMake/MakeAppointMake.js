import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import Btn from "../Shared/Btn";

const MakeAppointMake = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="my-20"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-14">
          <div className="flex-1 hidden lg:block">
            <img className="mt-[-120px] " src={doctor} alt="" />
          </div>
          <div className="flex-1 p-5">
            <h3 className="text-xl text-primary">Appointment</h3>
            <h2 className="text-3xl text-white py-4">
              Make a appointment today
            </h2>
            <p className="text-white pb-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Btn>Get Started</Btn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointMake;
