import React from "react";
import footer from "../assets/images/footer.png";

const Footer = () => {
  let month = new Date();
  let year = month.getFullYear();
  return (
    <footer
      className="bg-white text-accent py-10 lg:py-28"
      style={{
        backgroundImage: `url(${footer}) `,
        backgroundSize: "cover",
        repeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="container mx-auto">
        <div className=" footer py-10 px-4">
          <div>
            <span className="footer-title">SERVICES</span>
            <a className="link link-hover">Emergency Checkup</a>
            <a className="link link-hover">Monthly Checkup</a>
            <a className="link link-hover">Weekly Checkup</a>
            <a className="link link-hover">Deep Checkup</a>
          </div>
          <div>
            <span className="footer-title">ORAL HEALTH</span>
            <a className="link link-hover">Fluoride Treatment</a>
            <a className="link link-hover">Cavity Filling</a>
            <a className="link link-hover">Teath Whitening</a>
          </div>
          <div>
            <span className="footer-title">OUR ADDRESS</span>
            <a className="link link-hover">New York - 101010 Hudson</a>
          </div>
        </div>
        <div className="text-center font-semibold">
          <p>Copyright {year} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
