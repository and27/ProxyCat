import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const SocialFooter = () => {
  return (
    <div className="social-footer">
      <h4 className="mt-5">Follow us</h4>
      <div className="social-icons-container">
        <a href="https://www.instagram.com/and_b27/" target="_blank">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.facebook.com/andro.b777/" target="_blank">
          <FaFacebookF className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default SocialFooter;
