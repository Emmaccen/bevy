import React from "react";
import Navigation from "../topSectionContainer/Navigation";
import PageMaps from "../PageMaps";
import QuickContact from "../topSectionContainer/QuickContact";
import Welcome from "../topSectionContainer/Welcome";
import Meet from "../baseSectionContainer/Meet";
import Footer from "../baseSectionContainer/Footer";

class AboutPage extends React.Component {
  render() {
    return (
      <div className="aboutPageWrapper">
        <div className="backgroundFix aboutPage page">
          <Navigation />
          <div className="pageMapContainer">
            <PageMaps
              icon="iconFlat flaticon-pancake"
              pageText="About Us"
              currentPage="About"
            />
          </div>
        </div>

        <QuickContact />
        <Welcome />
        <Meet />
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
