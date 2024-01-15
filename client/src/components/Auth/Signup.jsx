// SignUp.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css"; // Replace with your actual CSS file name

const SignUp = () => {
  return (
    <main className="main">
      <div className="container">
        <section className="wrapper">
          <div className="heading">
            <h1 className="text text-large">Sign Up</h1>
            <p className="text text-normal">
              Already have an account?{" "}
              <span>
                <Link to="/">
                  <a className="text text-links">Sign In</a>
                </Link>
              </span>
            </p>
          </div>
          <form name="signup" className="form">
            <div className="input-control">
              <label htmlFor="email" className="input-label" hidden>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input-field"
                placeholder="Email Address"
              />
            </div>
            <div className="input-control">
              <label htmlFor="password" className="input-label" hidden>
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-field"
                placeholder="Password"
              />
            </div>
            <div className="input-control">
              <a href="#" className="text text-links">
                Forgot Password
              </a>
              <Link to="/dash">
                <button
                  type="submit"
                  
                  className="input-submit">SignIn</button>
              </Link>
            </div>
          </form>
          <div className="striped">
            <span className="striped-line"></span>
            <span className="striped-text">Or</span>
            <span className="striped-line"></span>
          </div>
          <div className="method">
            <div className="method-control">
              <a href="#" className="method-action google">
                <i className="ion ion-logo-google"></i>
                <span>Sign up with Google</span>
              </a>
            </div>
            <div className="method-control">
              <a href="#" className="method-action facebook">
                <i className="ion ion-logo-facebook"></i>
                <span>Sign up with Facebook</span>
              </a>
            </div>
            <div className="method-control">
              <a href="#" className="method-action apple">
                <i className="ion ion-logo-apple"></i>
                <span>Sign up with Apple</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignUp;
