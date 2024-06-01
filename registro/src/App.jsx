import React, { useState } from "react";
import Registro from "./components/Registro";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleFormSubmit = (success, message) => {
    setAlertMessage(message);
    setAlertType(success ? "success" : "danger");
  };

  return (
    <div className="App">
      <Registro
        onSubmit={handleFormSubmit}
        alertMessage={alertMessage}
        alertType={alertType}
      />
    </div>
  );
};

export default App;
