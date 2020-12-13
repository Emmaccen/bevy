import React from "react";
import Navigation from "./components/topSectionContainer/Navigation";
import PageMaps from "./components/PageMaps";
import QuickContact from "./components/topSectionContainer/QuickContact";
import Welcome from "./components/topSectionContainer/Welcome";
import Meet from "./components/baseSectionContainer/Meet";
import Footer from "./components/baseSectionContainer/Footer";

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
