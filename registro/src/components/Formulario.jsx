import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Formulario = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*._,-])[a-zA-Z0-9!@#$%^&*._,-]{7,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Completa todos los campos");
      onSubmit(false, "Completa todos los campos");
      return;
    }
    if (!email.includes("@")) {
      setError("El email no es válido");
      onSubmit(false, "El email no es válido");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "La contraseña debe tener al menos 7 caracteres, incluyendo números y símbolos"
      );
      onSubmit(
        false,
        "La contraseña debe tener al menos 7 caracteres, incluyendo números y símbolos"
      );
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      onSubmit(false, "Las contraseñas no coinciden");
      return;
    }
    onSubmit(true, "Registro exitoso");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="tuemail@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Confirma tu contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success w-100">
        Registrarse
      </button>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </form>
  );
};

export default Formulario;
