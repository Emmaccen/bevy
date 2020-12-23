import React from "react";
import Button2 from "../Button2";
import Fade from "react-reveal/Fade";

class QuickMenu extends React.Component {
  render() {
    return (
      <div className="quickMenuContainer">
        <Fade bottom>
          <div className="quickMenuHeader">
            <div>
              <span className="iconFlat flaticon-tray"></span>
            </div>
            <div>
              <h1 className="heading2">
                Explor Our Delicious <span>Specialties</span>
              </h1>
              <p className="descriptionText2">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit
              </p>
            </div>
          </div>
        </Fade>

        <div className="quickMenuItemsContainer">
          <Fade bottom>
            <div className="quickMenuItemWrapper">
              <div
                style={{ backgroundImage: `url(${"menu/dish-1.jpg"})` }}
                className="QuickMenuItemBg backgroundFix"
              ></div>
              <div>
                <p className="descriptionText2">
                  Excepteur cupidatat sint occaecat cupidatat Excepteur
                  cupidatat sint
                </p>
                <h3 className="heading2">$ 19.99</h3>
                <Button2 buttonText="Add To Cart" />
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div className="quickMenuItemWrapper">
              <div
                style={{ backgroundImage: `url(${"menu/dish-3.jpg"})` }}
                className="QuickMenuItemBg backgroundFix"
              ></div>
              <div>
                <p className="descriptionText2">
                  Excepteur cupidatat sint occaecat cupidatat Excepteur
                  cupidatat sint
                </p>
                <h3 className="heading2">$ 27.99</h3>
                <Button2 buttonText="Add To Cart" />
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div className="quickMenuItemWrapper">
              <div
                style={{ backgroundImage: `url(${"menu/dish-2.jpg"})` }}
                className="QuickMenuItemBg backgroundFix"
              ></div>
              <div>
                <p className="descriptionText2">
                  Excepteur cupidatat sint occaecat cupidatat Excepteur
                  cupidatat sint
                </p>
                <h3 className="heading2">$ 46.99</h3>
                <Button2 buttonText="Add To Cart" />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default QuickMenu;
