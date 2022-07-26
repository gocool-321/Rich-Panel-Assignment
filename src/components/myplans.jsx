import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import "./welcome.css";

function MyPlans() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const res = await axios.get(
        "http://localhost:8282/getallorders/" + user.email
      );
      setOrders(res.data);
    };
    getOrders();
  }, []);
  return (
    <>
      <div className="centralized">
        <div className="card">
          <div>
            {isAuthenticated ? (
              <>
                <h2 style={{ marginBottom: "4rem" }}>Current Plans: </h2>
                {orders.map((order) => {
                  return (
                    <h4>
                      Plan: <span>{order.planName}</span> -{" "}
                      <span>{order.amount}</span>
                    </h4>
                  );
                })}
                <NavLink to="/" className="btn btn-primary m-3">
                  Go Back
                </NavLink>
              </>
            ) : (
              <Redirect to="/" />
            )}
          </div>
          ;
        </div>
      </div>
    </>
  );
}

export default MyPlans;
