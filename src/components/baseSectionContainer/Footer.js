import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footerSection">
        {/* <hr></hr> */}
        <footer>
          <div>
            <p className="descriptionText2">
              Copyright &copy; {new Date().getFullYear()} Bevily Foods
            </p>
          </div>
          <div className="footerSocialLinks">
            <ul>
              <li>
                <a
                  className="icon icon-instagram2"
                  href="https://twitter.com/emmaccen"
                >
                  {" "}
                </a>
              </li>
              <li>
                <a
                  className="icon icon-facebook2"
                  href="https://emmaccen.netlify.app/"
                >
                  {" "}
                </a>
              </li>
              <li>
                <a
                  className="icon icon-twitter2"
                  href="https://twitter.com/emmaccen"
                >
                  {" "}
                </a>
              </li>
              <li>
                <a
                  className="icon icon-linkedin2"
                  href="https://www.linkedin.com/in/emmanuel-lucius-emmaccen/"
                >
                  {" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="waterMark">
            <p className="descriptionText2">
              Template Made With <span className="icon-heart"></span> by{" "}
              <a href="https://emmaccen.netlify.app/">Emmanuel.</a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
