import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Login.css";
import { login, signup } from "../../firebase";
import netflix_spinner from '../../assets/netflix_spinner.gif'

function Login() {
  const [signState, setSignState] = useState("Sign in");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false)

  const user_auth = async (event) => {
    event.preventDefault()
    setLoading(true)
    if (signState === "Sign in") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false)
  };

  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Enter your name"
            />
          ) : (
            <></>
          )}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="password"
          />
          <button onClick={user_auth} type="submit">{signState}</button>
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
              New To Nextflix?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign in Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
