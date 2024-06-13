import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Login.css";

function Login() {
  const [signState, setSignState] = useState("Sign in");

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Enter your name" />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New To Nextflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign up Now</span>
            </p>
          ) : (
            <p>
              Already have account? <span onClick={()=>{setSignState("Sign In")}}>Sign in Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
