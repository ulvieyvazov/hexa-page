import React from "react";
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <div className="about">
          <h3>ABOUT THE HEXA TEMPLATE</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus et dolor blanditiis consequuntur ex voluptates
            perspiciatis omnis unde minima expedita.
          </p>

          <div className="icons">
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaLinkedinIn />
            </div>
            <div>
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="contact">
          <h3>Contact Info</h3>
          <div>
            <li>
              <p>Address:</p>
              <span>34 Street Name, City Name Here, United States</span>
            </li>
            <li>
              <p>Telephone:</p>
              <span>+1 242 4942 290</span>
            </li>
            <li>
              <p>Email:</p>
              <span>info@yourdomain.com</span>
            </li>
          </div>
        </div>
        <div className="links">
          <h3>Quick Links</h3>
          <div>
            <p>About</p>
            <p>Terms of Use</p>
            <p>Disclaimers</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className="end">
        <div className="end-child">
          <span>Copyright ©</span>
          <span>2023 All rights reserved | This template is made with <FaHeart/> by <span style={{color: "#e74208"}}>Colorlib</span></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
