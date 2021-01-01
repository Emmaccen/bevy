import React from "react";
import Navigation from "../topSectionContainer/Navigation";
import PageMaps from "../PageMaps";
import QuickContact from "../topSectionContainer/QuickContact";
import Contact from "../baseSectionContainer/Contact";
import Footer from "../baseSectionContainer/Footer";

class ContactPage extends React.Component {
  render() {
    return (
      <div>
        <div className="backgroundFix contactPage page">
          <Navigation />
          <div className="pageMapContainer">
            <PageMaps
              icon="iconFlat flaticon-tray"
              pageText="Contact"
              currentPage="Contact"
            />
          </div>
        </div>
        <div style={{ marginBottom: "50px" }}>
          <QuickContact />
        </div>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
