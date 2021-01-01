import React, { Component } from "react";
import Button from "../Button";

class IntroText extends Component {
  constructor() {
    super();

    this.state = {
      intro: "",
    };
  }

  render() {
    return (
      <div className="introTextContainer">
        <div>
          <h1>Hello There !</h1>
        </div>
        <div>
          <h1 id="showCase">Wonderful Taste, Beautiful Place</h1>
        </div>
        <div>
          <p className="descriptionText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            recusandae nostrum est numquam nihil vero iste iure.
          </p>
        </div>
        <div className="buttonContainer">
          <div>
            <Button buttonText="Order Now" />
          </div>
          <div>
            <Button buttonText="View Menu" />
          </div>
        </div>
      </div>
    );
  }
}

export default IntroText;
