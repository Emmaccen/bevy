import React from "react";
import Button2 from "../Button2";

class QuickMenu extends React.Component {
  render() {
    return (
      <div className="quickMenuContainer">
        <div className="quickMenuHeader">
          <div>
            <span className="iconFlat flaticon-tray"></span>
          </div>
          <div>
            <h1 className="heading2">
              Explor Our Delicious <span>Specialties</span>
            </h1>
            <p className="descriptionText2">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit
            </p>
          </div>
        </div>

        <div className="quickMenuItemsContainer">
          <div className="quickMenuItemWrapper">
            <div
              style={{ backgroundImage: `url(${"menu/dish-1.jpg"})` }}
              className="QuickMenuItemBg backgroundFix"
            ></div>
            <div>
              <p className="descriptionText2">
                Excepteur cupidatat sint occaecat cupidatat
              </p>
              <h3 className="heading2">$ 19.99</h3>
              <Button2 buttonText="Add To Cart" />
            </div>
          </div>

          <div className="quickMenuItemWrapper">
            <div
              style={{ backgroundImage: `url(${"menu/dish-3.jpg"})` }}
              className="QuickMenuItemBg backgroundFix"
            ></div>
            <div>
              <p className="descriptionText2">
                Excepteur cupidatat sint occaecat cupidatat
              </p>
              <h3 className="heading2">$ 27.99</h3>
              <Button2 buttonText="Add To Cart" />
            </div>
          </div>

          <div className="quickMenuItemWrapper">
            <div
              style={{ backgroundImage: `url(${"menu/dish-2.jpg"})` }}
              className="QuickMenuItemBg backgroundFix"
            ></div>
            <div>
              <p className="descriptionText2">
                Excepteur cupidatat sint occaecat cupidatat
              </p>
              <h3 className="heading2">$ 46.99</h3>
              <Button2 buttonText="Add To Cart" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuickMenu;
