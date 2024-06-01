import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";

const SocialButton = ({ icon }) => {
  return (
    <button className="btn btn-outline-primary me-2">
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default SocialButton;
