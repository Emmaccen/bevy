import React from "react";
import Button from "../Button";
import Fade from "react-reveal/Fade";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="contactContainer">
            <Fade bottom>
              <div className="centered contactHeader">
                <div>
                  <h1 className="heading2">
                    Get In <span>Touch</span>
                  </h1>
                  <p className="descriptionText2">
                    sapiente veritatis reprehe suscipit quaerat rerum
                    voluptatibus veritatis reprehe suscipit
                  </p>
                </div>
              </div>
            </Fade>

            <div className="formGrid">
              <div className="quickContactLinks">
                <Fade bottom>
                  <div className="backgroundFix contactImage"></div>
                </Fade>
                <div className="qcl">
                  <div>
                    <span className="icon icon-location2"></span>
                    <p className="descriptionText2">
                      395 Killer Street, DeadZone, Tokyo City.
                    </p>
                  </div>

                  <div>
                    <span className="icon icon-phone"></span>
                    <a href="tel:+234-814-397-2237">
                      <p className="descriptionText2">+234-814-397-2237</p>
                    </a>
                  </div>

                  <div>
                    <span className="icon icon-mail"></span>
                    <a href="mailto:lucius.emmanuel.e@gmail.com">
                      <p className="descriptionText2">
                        lucius.emmanuel.e@gmail.com
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <form>
                  <div className="contactForm">
                    <div>
                      <label htmlFor="contact-name">Fullname</label>
                      <input
                        required
                        placeholder="Fullname"
                        type="name"
                        name="contact-name"
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="contact-email">Email</label>
                      <input
                        required
                        placeholder="Mail"
                        name="contact-email"
                        type="email"
                      ></input>
                    </div>

                    <textarea required></textarea>
                    <div>
                      <Button buttonText="Send Message" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
