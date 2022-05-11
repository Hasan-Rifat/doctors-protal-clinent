import React from "react";
import AboutService from "../AboutService/AboutService";

import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
import Info from "../Info/Info";
import MakeAppointMake from "../MakeAppointMake/MakeAppointMake";
import OurServices from "../OurServices/OurServices";
import Testimonial from "../Testimonial/Testimonial";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <OurServices></OurServices>
      <AboutService></AboutService>
      <MakeAppointMake></MakeAppointMake>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
