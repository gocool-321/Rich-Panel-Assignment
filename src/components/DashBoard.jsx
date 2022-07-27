import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
export default function DashBoard(props) {
  const { logout, user } = useAuth0();
  return (
    <div className="centralized">
      <div className="card ">
        <h4 className="has-text-success-dark">
          <span className="has-text-danger-dark">Welcome</span> {user.name}
        </h4>
        {/* <h6>{user.email}</h6> */}
        <NavLink to="/plans" className="btn btn-warning m-4">
          Go Through Plans
        </NavLink>
        <NavLink to="/myplans" className="btn btn-secondary">
          My Plans
        </NavLink>
        <button className="btn btn-dark" onClick={() => logout()}>
          Logout
        </button>
      </div>
    </div>
  );
}
