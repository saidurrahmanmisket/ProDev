import React from "react";
import {  Nav, Navbar as ReactNav } from "react-bootstrap";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../common/logo/Logo";
// import Logo from "../../common/logo/Logo";
const NavBar = () => {
  return (
    <>
      <ReactNav
        className={style.container}
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        {/* <Container > */}
        {/* <ReactNav.Brand className={style.logoBrand} to="/">
          ProDev
        </ReactNav.Brand> */}
        <Logo />
        <ReactNav.Toggle aria-controls="responsive-navbar-nav" />
        <ReactNav.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className={({ isActive }) =>
                isActive ? style.activeClass : style.defaultClass
              }
              to="/"
            >
              Home
              <span className={style.dot}></span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.activeClass : style.defaultClass
              }
              to="/about"
            >
              About
              <span className={style.dot}></span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.activeClass : style.defaultClass
              }
              to="/contact"
            >
              Contact
              <span className={style.dot}></span>
            </NavLink>
          </Nav>
          <Nav>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.activeClass : style.defaultClass
              }
              to="/login"
            >
              Login
              <span className={style.dot}></span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.activeClass : style.defaultClass
              }
              to="/signup"
            >
              Sign Up
              <span className={style.dot}></span>
            </NavLink>
          </Nav>
        </ReactNav.Collapse>
        {/* </Container> */}
      </ReactNav>
    </>
  );
};

export default NavBar;
