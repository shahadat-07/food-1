import React from "react";
import { Link } from "react-router-dom";
import LoginImage from "../../assets/images/login.webp";
import Header from "../Shared Components/Header/Header";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <section>
      <Header />
      <div className="container">
        <div className="text-center">
          <h1 className="h3 font-weight-normal mt-5">Welcome!</h1>
          <p className="text-secondary mb-5">Sign up or log in to continue</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src={LoginImage}
              className="img-fluid rounded p-4"
              alt=""
              srcset=""
            />
          </div>
          <div className="col-md-6">
            <form id="login" className="form-signin">
              <label for="inputEmail" className="sr-only">
                <span className="text-secondary">Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter Your Email"
                required
              />{" "}
              <br />
              <label for="inputPassword" className="sr-only">
                <span className="text-secondary">Password</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
                required
              />
              {/* <p style="display: none;" id="warning" className="text-danger text-left my-3">Sorry, you entered the wrong username and/or password</p> */}
              <div className="checkbox my-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="btn btn-primary" type="submit">
                Log in
              </button>
              <br />
              <div className="d-flex mt-3">
                <span>Haven't an account yet?</span>
                <Link to="/signup" className={classes.register}>
                  Create an account here !
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
