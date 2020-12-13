import React from "react";
import Navigation from "../topSectionContainer/Navigation";
import PageMaps from "../PageMaps";
import QuickMenu from "../middleSectionContainer/QuickMenu";
import menuList from "../../Data/menuData";
import Button2 from "../Button2";
import Footer from "../baseSectionContainer/Footer";

function MenuItems(props) {
  const list = props.menuList.map((menu) => {
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
  constructor() {
    super();
    this.state = {
      menuList: menuList,
      filterMenuList: menuList,
      active: "all",
    };
  }

  filterMenuList = (type) => {
    const menuList = this.state.menuList.filter((menuItem) =>
      type === "all" ? true : menuItem.type === type
    );
    this.setState({ filterMenuList: menuList, active: type });
  };

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
              <button
                onClick={() => this.filterMenuList("all")}
                className={this.state.active === "all" && "active"}
              >
                All Menu
              </button>
              <button
                onClick={() => this.filterMenuList("breakfast")}
                className={this.state.active === "breakfast" && "active"}
              >
                Breakfast
              </button>
              <button
                onClick={() => this.filterMenuList("launch")}
                className={this.state.active === "launch" && "active"}
              >
                Launch
              </button>
              <button
                onClick={() => this.filterMenuList("dinner")}
                className={this.state.active === "dinner" && "active"}
              >
                Dinner
              </button>
              <button
                onClick={() => this.filterMenuList("drink")}
                className={this.state.active === "drink" && "active"}
              >
                Drinks
              </button>
            </div>
          </div>
          <div className="menuItemsWrapper">
            <MenuItems menuList={this.state.filterMenuList} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MenuPage;
