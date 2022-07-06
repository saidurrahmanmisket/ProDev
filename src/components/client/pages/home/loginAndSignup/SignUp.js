import React from 'react';
import './login.css'
import image from "../../../../../assets/login/password.gif";
import NavBar from '../../../navBar/NavBar';
import Footer from '../../../footer/Footer';
import Button from '../../../../common/button/Button';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    return (
      <>
        <NavBar />
        {/* <h1>This is Login page </h1> */}
        <div className="loginBody">
          <div className="loginLeft">
            <img className="loginImage" alt='singup' src={image} />
          </div>
          <div className="loginRight">
            <div>
              <h2>Login to ProDev</h2>
              <input
                className="fieldInput"
                type={"email"}
                placeholder="Full Name..."
              />
              <input
                className="fieldInput"
                type={"email"}
                placeholder="Email..."
              />
              <input
                className="fieldInput"
                type={"password"}
                placeholder="Password..."
              />
              <input
                className="fieldInput"
                type={"password"}
                placeholder="Confirm Password..."
              />

              <NavLink to={"/login"}>
                <Button
                  style={{ width: "100%" }}
                  id="loginButton"
                  text={"Sign Up"}
                />
              </NavLink>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
};

export default SignUp;