import React from 'react';
import Button from '../../../../common/button/Button';
import NavBar from '../../../navBar/NavBar';
import image from "../../../../../assets/login/password.gif";
import './login.css'
import Footer from '../../../footer/Footer';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
      <>
        <NavBar />
        {/* <h1>This is Login page </h1> */}
        <div className="loginBody">
          <div className="loginLeft">
            <img className="loginImage" alt='login' src={image} />
          </div>
          <div className="loginRight">
            <div>
              <h2>Login to ProDev</h2>
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
              <div className="loginCek">
                <input type={"checkbox"} />
                <p>Remember me</p>
              </div>

              <NavLink to={"/dashboard"}>
                <Button
                  style={{ width: "100%" }}
                  id="loginButton"
                  text={"LogIn"}
                />
              </NavLink>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
};

export default Login;