import React from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Registro = ({ onSubmit, alertMessage, alertType }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="text-center">Crea una cuenta</h2>
            <div className="text-center mb-3">
              <SocialButton icon={faFacebook} />
              <SocialButton icon={faGithub} />
              <SocialButton icon={faLinkedin} />
            </div>
            <Formulario onSubmit={onSubmit} />
            {alertMessage && <Alert message={alertMessage} type={alertType} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
