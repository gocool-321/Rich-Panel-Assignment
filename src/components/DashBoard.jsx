import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
export default function DashBoard(props) {
  const { logout, user } = useAuth0();
  return (
    <div className="centralized">
      <div className="card">
        <h1>Welcome {user.name}</h1>
        <h6>Welcome {user.email}</h6>
        <NavLink to="/plans" className="m-4">
          Go Through Plans
        </NavLink>
        <button className="btn btn-info" onClick={() => logout()}>
          Logout
        </button>
      </div>
    </div>
  );
}
