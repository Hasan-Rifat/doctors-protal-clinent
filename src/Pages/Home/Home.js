import React from "react";
import MakeAppointMake from "./MakeAppointMake";
import OurServices from "./OurServices";
import Banner from "./Banner";
import Info from "./Info";
import AboutService from "./AboutService";
import Testimonial from "./Testimonial";
import ContactForm from "./ContactForm";
import Footer from "../Shared/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;
