import React from 'react';
import Button from '../../common/button/Button';
import './Footer.css'



const Footer = () => {
    return (
      <>
        <div className="footerBody">
          <div className="footerMain">
            <div className="footerLeft">
              <ul>
                <li>
                  <h5>Tags</h5>
                </li>
                <li>Education</li>
                <li>Food</li>
                <li>Life style</li>
                <li>Nature</li>
                <li>Travel</li>
                <li>Work</li>
              </ul>
            </div>
            <div className="footerMid">
              <ul>
                <li>
                  <h5>Navigation</h5>
                </li>
                <li>About</li>
                <li>Authors</li>
                <li>Elements</li>
                <li>Contact</li>
                <li>Travel</li>
                <li>Work</li>
              </ul>
            </div>
            <div className="footerRight">
                <h5>Newsletter</h5>
                <div>
                  <input
                    className="footerInput"
                    type={"text"}
                    placeholder="Your email"
                  />
                  <Button text={"Subscribe"} />
                </div>
            </div>
          </div>
          <div className="footerEnd">
            <p>© 2022 All Rights Resarved Saidur</p>
          </div>
        </div>
      </>
    );
};

export default Footer;