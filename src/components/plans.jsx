import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Toggle from "react-toggle";
import "./plans.css";
import { Redirect } from "react-router-dom";
import "./toggle.css";

function Plans() {
  const [plans, setPlans] = useState(0);
  const [prices, setPrices] = useState([100, 200, 500, 700]);
  const { isAuthenticated, isLoading } = useAuth0();

  const handlePrices = (e) => {
    if (e.target.checked) {
      setPrices([1000, 2000, 5000, 7000]);
    } else {
      setPrices([100, 200, 500, 700]);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("current Price is", prices[plans]);
  };
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {isAuthenticated ? (
            <div>
              <section className="ft">
                <h1 className="cta m-5">
                  Choose the plan that’s right for you
                </h1>
              </section>
              <div className="plan-page">
                <div className="plan-grid">
                  <div className="plan-container">
                    <div className="plans0"></div>
                    <div className="plans mobile-plan">
                      <label id="mobile" htmlFor="netflix-mobile">
                        Mobile
                      </label>
                      <input
                        type="radio"
                        name="netflix"
                        value="Mobile"
                        onClick={() => setPlans(0)}
                        id="netflix-mobile"
                        checked={plans === 0}
                      />
                    </div>
                    <div className="plans basic-plan">
                      <label id="basic" htmlFor="netflix-basic">
                        Basic
                      </label>
                      <input
                        type="radio"
                        name="netflix"
                        value="Basic"
                        id="netflix-basic"
                        onClick={() => setPlans(1)}
                        checked={plans === 1}
                      />
                    </div>
                    <div className="plans std-plan">
                      <label id="std" htmlFor="netflix-std">
                        Standard
                      </label>
                      <input
                        type="radio"
                        name="netflix"
                        value="Standard"
                        onClick={() => setPlans(2)}
                        id="netflix-std"
                        checked={plans === 2}
                      />
                    </div>
                    <div className="plans premium-plan">
                      <label id="premium" htmlFor="netflix">
                        Premium
                      </label>
                      <input
                        type="radio"
                        name="netflix"
                        value="Premium"
                        onClick={() => setPlans(3)}
                        id="netflix-premium"
                        checked={plans === 3}
                      />
                    </div>
                    <p className="monthly-price" style={{ marginTop: "1rem" }}>
                      Monthly Price
                    </p>
                    <strong
                      className="monthly-price misSelected"
                      style={{ marginTop: "1rem" }}
                    >
                      ₹{prices[0]}
                    </strong>
                    <strong
                      className="monthly-price bisSelected"
                      style={{ marginTop: "1rem" }}
                    >
                      ₹{prices[1]}
                    </strong>
                    <strong
                      className="monthly-price sisSelected"
                      style={{ marginTop: "1rem" }}
                    >
                      ₹{prices[2]}
                    </strong>
                    <strong
                      className="monthly-price pisSelected"
                      style={{ marginTop: "1rem" }}
                    >
                      ₹{prices[3]}
                    </strong>
                    <hr id="line" style={{ borderBottom: "1px solid #ccc" }} />
                    <p className="video-quality">Video Quality</p>
                    <strong className="video-quality misSelected">Good</strong>
                    <strong className="video-quality bisSelected">Good</strong>
                    <strong className="video-quality sisSelected">
                      Better
                    </strong>
                    <strong className="video-quality pisSelected">Best</strong>
                    <hr id="line1" style={{ borderBottom: "1px solid #ccc" }} />
                    <p className="resolution">Resolution</p>
                    <strong className="resolution misSelected">480p</strong>
                    <strong className="resolution bisSelected">480p</strong>
                    <strong className="resolution sisSelected">1080p</strong>
                    <strong className="resolution pisSelected">4K+HDR</strong>
                    <hr id="line2" style={{ borderBottom: "1px solid #ccc" }} />
                    <p className="devtowatch">Devices you can use to watch</p>

                    <div className="dev-svg-cont phone tablet misSelected">
                      <div className="dev-svg phone">
                        <div className="dev-svg-label m-3 phone">Phone</div>
                      </div>
                      <div className="dev-svg tablet">
                        <div className="dev-svg-label m-3 tablet">Tablet</div>
                      </div>
                    </div>
                    <div className="dev-svg-cont phone tablet misSelected">
                      <div className="dev-svg phone">
                        <div className="dev-svg-label m-3 phone">Phone</div>
                      </div>
                      <div className="dev-svg tablet">
                        <div className="dev-svg-label m-3 tablet">Tablet</div>
                      </div>

                      <div className="dev-svg computer">
                        <div className="dev-svg-label m-3 tablet">Computer</div>
                      </div>
                    </div>
                    <div className="dev-svg-cont phone tablet misSelected">
                      <div className="dev-svg phone">
                        <div className="dev-svg-label m-3 phone">Phone</div>
                      </div>
                      <div className="dev-svg tablet">
                        <div className="dev-svg-label m-3 tablet">Tablet</div>
                      </div>

                      <div className="dev-svg computer">
                        <div className="dev-svg-label m-3 tablet">Computer</div>
                      </div>
                    </div>
                    <div className="dev-svg-cont phone tablet misSelected">
                      <div className="dev-svg phone">
                        <div className="dev-svg-label m-3 phone">Phone</div>
                      </div>
                      <div className="dev-svg tablet">
                        <div className="dev-svg-label m-3 tablet">Tablet</div>
                      </div>

                      <div className="dev-svg computer">
                        <div className="dev-svg-label m-3 tablet">Computer</div>
                      </div>
                    </div>
                  </div>
                </div>
                <section className="disclaimer m-2">
                  <small>
                    HD (720p), Full HD (1080p), Ultra HD (4K) and HDR
                    availability subject to your internet service and device
                    capabilities. Not all content is available in all
                    resolutions. See our Terms of Use for more details.
                  </small>
                  <small>
                    Only people who live with you may use your account. Watch on
                    4 different devices at the same time with Premium, 2 with
                    Standard, and 1 with Basic and Mobile.
                  </small>
                </section>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    height: "50px",
                    marginTop: "1rem",
                  }}
                >
                  <span>Year</span>
                  <span className="m-2">
                    <Toggle
                      defaultChecked={false}
                      icons={false}
                      onChange={handlePrices}
                    />
                  </span>
                  <span>Month</span>
                </div>
                <button onClick={submitForm}>Next</button>
              </div>
            </div>
          ) : (
            <Redirect to="/" />
          )}
        </div>
      )}
    </>
  );
}

export default Plans;
