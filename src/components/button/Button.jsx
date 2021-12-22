import React from "react";
import "../button/Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <>
      <Link to="login">
        <button className="login-btn">Login</button>
      </Link>

      <Link to="startforfree">
        <button className="startforfree-btn">Start for free</button>
      </Link>
    </>
  );
}
