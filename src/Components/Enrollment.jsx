import React from "react";
import { Link } from "react-router-dom";

function Enrollment() {
  return (
    <div className="enrollment-container">
      <p>Enter into Student Info System </p>
      <Link className="enrollment-link" to="chatbot">
        Enrollment Now
      </Link>
    </div>
  );
}

export default Enrollment;
