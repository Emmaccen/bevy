import React from "react";
import Instagram from "./Instagram";
import Meet from "./Meet";
import Contact from "./Contact";
import Footer from "./Footer";

class BaseSectionRender extends React.Component {
  render() {
    return (
      <div>
        <Instagram />
        <Meet />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default BaseSectionRender;
