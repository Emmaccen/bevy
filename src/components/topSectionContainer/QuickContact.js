import React, { Component } from "react";

class QuickContact extends Component {
  render() {
    return (
      <div className="quickContactContainer">
        <div className="quickContactContentContainer">
          <h3>
            <span className="icon icon-phone"></span>
            <a href="tel:+234-703-068-0817">+234-703-068-0817</a>
          </h3>
          <p className="descriptionText2">
            A small river named Duden flows by their place and supplies
          </p>
        </div>
        <div className="quickContactContentContainer">
          <h3>
            <span className="icon icon-location2"></span>
            <a href="#">395 Killer Street, DeadZone</a>
          </h3>
          <p className="descriptionText2">
            A small river named Duden flows by their place and supplies
          </p>
        </div>
        <div className="quickContactContentContainer">
          <h3>
            <span className="icon icon-mail"></span>
            <a href="mailto:oriolaemmanuel199@gmail.com">Email Address</a>
          </h3>
          <p className="descriptionText2">
            A small river named Duden flows by their place and supplies
          </p>
        </div>
      </div>
    );
  }
}

export default QuickContact;
