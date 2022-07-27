import React from "react";
import { NavLink } from "react-router-dom";
import "./welcome.css";

export default function ErrorPage402(props) {
  return (
    <div className="centralized">
      <div className="card">
        <h1>Page not found!</h1>
        <NavLink to="/" className="btn btn-danger m-4">
          Click here to go back
        </NavLink>
      </div>
    </div>
  );
}
