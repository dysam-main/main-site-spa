import React from "react";
import "./footer.css";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">Dysam Soft</span>
          <span>Copyright © 2022 by Dysam Soft</span>
        </div>
        <div className="footer-container2">
          <div className="footer-container3 desktop">
            <span className="footer-text03 Large">
              <svg viewBox="0 0 1024 1024" className="profile-icon04">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <a
                href="mailto:dysman.soft@gmail.com?subject="
                className="profile-link1 Small"
              >
                dysam.soft@gmail.com
              </a>
            </span>
            <span className="footer-text03 Large">
              <a href="tel:+5492694528053">
                <svg viewBox="0 0 1024 1024" className="profile-icon02">
                  <path d="M742 460l-94-94q-18-18-10-44 24-72 24-152 0-18 12-30t30-12h150q18 0 30 12t12 30q0 300-213 513t-513 213q-18 0-30-12t-12-30v-150q0-18 12-30t30-12q80 0 152-24 24-10 44 10l94 94q186-96 282-282z"></path>
                </svg>
              </a>
              <a href={`https://wa.me/2964528053`}>
                <RiWhatsappFill className="profile-icon02" />
              </a>
              <span className="profile-link Small">(+54) 2694 528053</span>
            </span>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/waves-white.svg"
        className="footer-image"
      />
    </footer>
  );
};

export default Footer;
