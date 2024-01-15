import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // Replace with your actual CSS file name

const Login = () => {
  const navigate = useNavigate();

  // Define the handleNavigate function to navigate to another page
  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Use the navigate function to navigate to the specified path
    navigate('/dash');
  };

  return (
    <main className="main">
      <div className="container">
        <section className="wrapper">
          <div className="heading">
            <h1 className="text text-large">Sign In</h1>
            <p className="text text-normal">
              New user?{" "}
              <span>
                <Link to='/signup'>
                  <p className="text text-links">Create an account</p>
                </Link>
              </span>
            </p>
          </div>
          <form name="signin" className="form" onSubmit={handleSignIn}>
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
              <button
                type="submit"
                onClick={handleSignIn}
                className="input-submit"
                value="Sign In">Submit</button>
            </div>
          </form>
          <div className="striped">
            <span className="striped-line"></span>
            <span className="striped-text">Or</span>
            <span className="striped-line"></span>
          </div>
          <div className="method-control">
            <a href="#" className="method-action google">
              <i className="ion ion-logo-google"></i>
              <span>Sign in with Google</span>
            </a>
          </div>
          <div className="method-control">
            <a href="#" className="method-action facebook">
              <i className="ion ion-logo-facebook"></i>
              <span>Sign in with Facebook</span>
            </a>
          </div>
          <div className="method-control">
            <a href="#" className="method-action apple">
              <i className="ion ion-logo-apple"></i>
              <span>Sign in with Apple</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
