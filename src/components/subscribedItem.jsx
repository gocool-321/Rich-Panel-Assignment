import React from "react";
import { NavLink } from "react-router-dom";

function SubscribedItem({ order }) {
  return (
    <NavLink to={`/plan/${order.userId_stripe}`}>
      <h4 className="has-text-warning-dark">
        Plan: <span>{order.planName}</span> - <span>{order.amount}</span>
        {/* <span></span> */}
      </h4>
    </NavLink>
  );
}

export default SubscribedItem;
