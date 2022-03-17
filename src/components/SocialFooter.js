import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const SocialFooter = () => {
  return (
    <div className="social-footer">
      <h4 className="mt-5">Follow us</h4>
      <div className="social-icons-container">
        <FaInstagram className="social-icon" />
        <FaFacebookF className="social-icon" />
      </div>
    </div>
  );
};

export default SocialFooter;
