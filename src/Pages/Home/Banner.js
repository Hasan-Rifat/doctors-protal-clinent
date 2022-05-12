import React from "react";
import img from "../../assets/images/chair.png";
import Btn from "../Shared/Btn";
const Banner = () => {
  return (
    <div className="py-20">
      <div className="">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between sm:py-10 lg:py-20 px-8 gap-20">
          <div className="flex-1">
            <img src={img} className="w-full rounded-lg shadow-2xl" alt="" />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <Btn>GET STARTED</Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
