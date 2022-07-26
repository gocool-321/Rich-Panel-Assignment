import React from "react";
import { NavLink } from "react-router-dom";


export default function ErrorPage402(props) {
    return (
        <div>
            {console.log(props)}
        <h1>Page with the Route "{props.location.pathname}" was not found </h1>
        <NavLink to="/">Click here to go back</NavLink>
        </div>
    );
}