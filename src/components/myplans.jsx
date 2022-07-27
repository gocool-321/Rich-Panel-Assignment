import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import "./welcome.css";
import SubscribedItem from "./subscribedItem";

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

  // const deletePayment =
  return (
    <>
      <div className="centralized">
        <div className="card">
          <div>
            {isAuthenticated ? (
              <>
                {orders.length === 0 ? (
                  <>
                    <h1>Naive User!</h1>
                    <NavLink to="/plans" className="btn btn-warning m-3">
                      Wanna subscribe?
                    </NavLink>
                  </>
                ) : (
                  <>
                    <h2 style={{ marginBottom: "4rem" }}>Current Plans: </h2>
                    {orders.map((order) => {
                      return <SubscribedItem order={order} />;
                    })}
                    <NavLink to="/" className="btn btn-primary m-3">
                      Go Back
                    </NavLink>
                  </>
                )}
              </>
            ) : (
              <Redirect to="/" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPlans;
