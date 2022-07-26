import React,{useState} from "react";
import "./welcome.css"
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendToBackEnd = async (e) => {
        e.preventDefault();
        console.log(email, password);
        const res = await axios.post("http://localhost:5000/login",{
            email: email,
            password: password
        });
        console.log(res);
       if (res.data === 'ok'){
        <Redirect to="/authenticated" />
       }
       else{
        <Redirect to="/unauthenticated" />
       }
    }

    return (
        <div className="centralized">
      <div className="card">
        <form>
          <div class="mb-3">
            <center style={{ marginTop: "1rem" }}>
              <h1>Login</h1>
            </center>
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Remember me
            </label>
          </div>
          <center>
            <button type="submit" onClick={sendToBackEnd} class="btn btn-primary ">
              Submit
            </button>
          </center>
          <center style={{ marginTop: "1rem" }}>
            <h6>
              New to App?
              <NavLink to="/" exact>
                Signup
              </NavLink>
            </h6>
          </center>
        </form>
      </div>
    </div>
    );
}