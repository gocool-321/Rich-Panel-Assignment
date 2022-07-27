import React, { useState } from "react";
import "./welcome.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom";

export default function Register(props) {
  const { loginWithPopup, isAuthenticated, user, logout, isLoading } =
    useAuth0();

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {isAuthenticated ? (
            <Redirect to="/dashboard" />
          ) : (
            <div className="centralized">
              {console.log(isAuthenticated, user)}
              <div className="card">
                <h3>Rich panel Assignment - Stripe Payments</h3>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    loginWithPopup();
                  }}
                >
                  Authenticate 🔑
                </button>
                {/* <button
                  className="btn btn-warning"
                  onClick={() => {
                    loginWithPopup();
                  }}
                >
                  Signup
                </button> */}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
