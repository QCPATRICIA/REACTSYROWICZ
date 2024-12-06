import React from "react";
import error from "../assets/404.png";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <img src={error} alt="404 Not Found" />
      <h3>si esta comiendo mal.....estas perdido, mejor volvá a nuestra página de comidaSaludableS</h3>
    </div>
  );
};

export default NotFound;
