import React from "react";
import Btn from "../Shared/Btn";
import appointment from "../../assets/images/appointment.png";

const ContactForm = () => {
  return (
    <section
      className="py-8 lg:py-20"
      style={{
        background: `url(${appointment})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="">
        <div className="w-full lg:w-1/2 mx-auto text-center">
          <div className="p-6">
            <div className="service-info py-7">
              <h3 className="text-secondary font-bold text-xl ">Contact Us</h3>
              <h2 className="uppercase sm:text-xl md:text-4xl text-white py-3">
                Stay connected with us
              </h2>
            </div>
            <form>
              <input
                className="block w-full my-4 p-5 rounded-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Email Address"
              />
              <input
                type="text"
                placeholder="Subject"
                className="block w-full my-4 p-5 rounded-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <textarea
                placeholder="Your message"
                name=""
                id=""
                className="block w-full h-24 lg:h-56 my-4 p-5 rounded-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
              <div className="lowercase my-8">
                <Btn>Submit</Btn>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
