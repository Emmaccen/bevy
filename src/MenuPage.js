import React from "react";
import Navigation from "./components/topSectionContainer/Navigation";
import PageMaps from "./components/PageMaps";
import QuickMenu from "./components/middleSectionContainer/QuickMenu";
import menuList from "./Data/menuData";
import Button2 from "./components/Button2";
import Footer from "./components/baseSectionContainer/Footer";

function MenuItems() {
  const list = menuList.map((menu) => {
    return (
      <div>
        <div className="menuItem">
          <div
            style={{ backgroundImage: `url(${menu.menuImage})` }}
            className="backgroundFix menuImage"
          ></div>
          <div className="menuDetails">
            <h3 className="heading2">{menu.menuTitle}</h3>
            <div className="descriptionText2">{menu.menuDescription}</div>
            <h4>{menu.menuPrice}</h4>
            <Button2 buttonText="Place Order" />
          </div>
        </div>
      </div>
    );
  });
  return list;
}

class MenuPage extends React.Component {
  render() {
    return (
      <div className="menuPageWrapper">
        <div className="backgroundFix menuPage page">
          <Navigation />
          <div className="pageMapContainer">
            <PageMaps
              icon="iconFlat flaticon-chicken"
              pageText="Menu"
              currentPage="Menu"
            />
          </div>
        </div>
        <QuickMenu />
        <div className="menu">
          <div className="menuHeader">
            <h1 className="heading2">
              Our <span className="highlight">Menu</span>
            </h1>
            <div className="menuButtons">
              <button className="active">All Menu</button>
              <button>Breakfast</button>
              <button>Launch</button>
              <button>Dinner</button>
              <button>Drinks</button>
            </div>
          </div>
          <div className="menuItemsWrapper">
            <MenuItems />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MenuPage;
