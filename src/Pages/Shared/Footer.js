import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.png";

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
        <div className=" footer justify-between py-10 px-4">
          <div>
            <span className="footer-title">SERVICES</span>
            <Link to="" className="link link-hover">
              Emergency Checkup
            </Link>
            <Link to="" className="link link-hover">
              Monthly Checkup
            </Link>
            <Link to="" className="link link-hover">
              Weekly Checkup
            </Link>
            <Link to="" className="link link-hover">
              Deep Checkup
            </Link>
          </div>
          <div>
            <span className="footer-title">ORAL HEALTH</span>
            <Link to="" className="link link-hover">
              Fluoride Treatment
            </Link>
            <Link to="" className="link link-hover">
              Cavity Filling
            </Link>
            <Link to="" className="link link-hover">
              Teath Whitening
            </Link>
          </div>
          <div>
            <span className="footer-title">OUR ADDRESS</span>
            <Link to="" className="link link-hover">
              New York - 101010 Hudson
            </Link>
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
