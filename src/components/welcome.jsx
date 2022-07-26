import React, { useState } from "react";
import "./welcome.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom";

export default function Register(props) {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [name, setName] = useState("");

  //   const sendToBackEnd = async (e) => {
  //     e.preventDefault();
  //     console.log(email, password);
  //     const res = await axios.post("http://localhost:5000/signup",{
  //         email: email,
  //         name: name,
  //         password: password
  //     });
  //     console.log(res);
  // }
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
                <button
                  className="btn btn-warning m"
                  onClick={() => {
                    loginWithPopup();
                  }}
                >
                  Login
                </button>
                <button
                  className="btn btn-warning m-4"
                  onClick={() => {
                    loginWithPopup();
                  }}
                >
                  Signup
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
