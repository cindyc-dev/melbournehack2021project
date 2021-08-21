import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import icons from "../images/icons.jpg"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/dashboard");
  }, )
  
  return (
    <div className="login">
      <div className="login-left">
        <div className="login__container">
          <h1 className="login-title">Login</h1>
          <h2 className="login-subtitle">Manage all your subscriptions here</h2>
          <button className="login__btn login__google" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
          <p className="login-info">Email*</p>
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <p className="login-info">Password*</p>
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div className="login-green">
            <Link to="/reset">Forgot Password</Link>
          </div>
          <button
            
            onClick={() => signInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          
          <div>
            <p className="register-text">Don't have an account? <Link to="/register">Register</Link> now.</p>
          </div>
        </div>
      </div>
      <div className="login-right">
        <img src={icons} alt="icons"></img>
        <h1 className="trackzu">Trackzu</h1>
        <div className="slogan">
          <p>A central place to manage all your subscriptions, across all platform and devices.</p>
        </div>
        {/* oggeyy */}
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(26, 147, 111, 0.58)" 
          fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,138.7C672,139,768,181,
          864,176C960,171,1056,117,1152,85.3C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,
          320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg> */}
    </div>
  );
}