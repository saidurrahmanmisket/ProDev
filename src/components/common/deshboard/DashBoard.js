import React from "react";
import './DashBoard.css'
import avatar from '../../../assets/image/png.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
//   import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faGauge,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
library.add(faCheckSquare, faCoffee, faGauge);

const DashBoard = () => {
  return (
    <>
      <div className="dashBoard">
        <div className="dashLeft">
          <NavLink className="dashLogo" to={"/home"}>
            <h1 className="dashLogo">ProDev</h1>
          </NavLink>
          <p>Main</p>
          <ul>
            <li>
              <h5>DashBoard</h5>
            </li>
            <li>
              <h5>Order</h5>
            </li>
            <li>
              <h5>Category</h5>
            </li>
            <li>
              <h5>Collection</h5>
            </li>
            <li>
              <h5>Products</h5>
            </li>
            <li>
              <h5>Discount</h5>
            </li>
            <p>Others</p>
            <li>
              <h5>Plugin</h5>
            </li>
            <li>
              <h5>Marketing</h5>
            </li>
          </ul>
        </div>
        <div className="dashRight">
          <div className="dashRightTop">
            <div>
              <h1>DashBoard</h1>
            </div>
            <div>
              <input
                className="search"
                type={"search"}
                placeholder="Search...."
              />
            </div>
            <div>
              <img className="avatar" src={avatar} />
            </div>
                  </div>
                  <div className="dashBody">
                  <h1>Welcome to ProDev</h1>
                  </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
