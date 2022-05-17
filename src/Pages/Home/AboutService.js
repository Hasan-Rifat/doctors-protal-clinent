import React from "react";
import Btn from "../Shared/Btn";
import img from "../../assets/images/treatment.png";

const AboutService = () => {
  return (
    <div className=" py-20 mb-20">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <div>
            <img src={img} className="rounded-lg shadow-2xl" alt="" />
          </div>
          <div className="">
            <h1 className="text-5xl font-bold text-accent text-[28px] lg:text-[48px]">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
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
    </div>
  );
};

export default AboutService;
