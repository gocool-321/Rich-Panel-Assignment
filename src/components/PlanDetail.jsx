import React, { useEffect, useState } from "react";
import "./welcome.css";
import axios from "axios";
import { Button, Confirm } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

function PlanDetail(props) {
  const [currPlan, setCurrPlan] = useState({});
  const [redirects, setRedirects] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const getPlan = async () => {
      const id = props.match.params.id;
      const res = await axios.get(
        "http://localhost:8282/getorderbystripeId/" + id
      );
      setCurrPlan(res.data);
    };
    getPlan();
  }, []);
  var bgColors = {
    Default: "#81b71a",
    Blue: "#00B1E1",
    Cyan: "#37BC9B",
    Green: "#8CC152",
    Red: "#E9573F",
    Yellow: "#F6BB42",
  };
  const handleCancel = async () => {
    const id = props.match.params.id;
    // const val = await axios.get("http://localhost:8282/getbystripeid/" + id);
    currPlan["isCancelled"] = true;

    const res = await axios.patch(
      "http://localhost:8282/cancelorder/" + id,
      currPlan
    );
    setRedirects(true);
  };
  if (redirects === true) {
    return <Redirect to="/myplans" />;
  }
  return (
    <>
      <div className="centralized">
        <div className="card">
          {/* {console.log(currPlan)} */}
          {currPlan.isCancelled ? (
            <div
              style={{
                border: "1px black solid",
                padding: "0.3rem",
                borderRadius: "2rem",
                backgroundColor: bgColors.Red,
              }}
              className="m-4"
            >
              cancelled
            </div>
          ) : (
            <div
              style={{
                border: "1px black solid",
                padding: "0.3rem",
                borderRadius: "2rem",
                backgroundColor: bgColors.Green,
              }}
              className="m-4"
            >
              Active
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <h4>
              <b>Amount: </b>
              {currPlan.amount}
            </h4>
            <h4>
              <b>Plan Name: </b>
              {currPlan.planName}
            </h4>
            <h4>
              <b>email: </b>
              {currPlan.email}
            </h4>
          </div>
          <button
            disabled={currPlan.isCancelled}
            className="btn btn-danger"
            onClick={handleCancel}
          >
            Cancel Payment!
          </button>
        </div>
      </div>
    </>
  );
}

export default PlanDetail;
