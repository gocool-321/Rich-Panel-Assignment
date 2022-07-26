import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router-dom";
function StoreToDB() {
  const { isAuthenticated, user, isLoading } = useAuth0();
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {isAuthenticated ? (
            <>
              {console.log(isAuthenticated, user)}
              <Redirect to="/" />
            </>
          ) : (
            <Redirect to="/" />
          )}
        </>
      )}
    </>
  );
}

export default StoreToDB;
