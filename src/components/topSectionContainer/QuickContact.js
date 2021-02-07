import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class QuickContact extends Component {
  render() {
    return (
      <Fade bottom>
        <div className="quickContactContainer">
          <div className="quickContactContentContainer">
            <h3>
              <span className="icon icon-phone"></span>
              <a href="tel:+234-814-397-2237">+234-814-397-2237</a>
            </h3>
            <p className="descriptionText2">
              A small river named Duden flows by their place and supplies
            </p>
          </div>
          <div className="quickContactContentContainer">
            <h3>
              <span className="icon icon-location2"></span>
              <a href="https://emmaccen.netlify.app/">
                395 Killer Street, DeadZone
              </a>
            </h3>
            <p className="descriptionText2">
              A small river named Duden flows by their place and supplies
            </p>
          </div>
          <div className="quickContactContentContainer">
            <h3>
              <span className="icon icon-mail"></span>
              <a href="mailtolucius.emmanuel.e@gmail.com">Email Address</a>
            </h3>
            <p className="descriptionText2">
              A small river named Duden flows by their place and supplies
            </p>
          </div>
        </div>
      </Fade>
    );
  }
}

export default QuickContact;
