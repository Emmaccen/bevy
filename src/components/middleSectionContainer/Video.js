import React, { Component } from "react";
import Fade from "react-reveal/Fade";

/* 
i have no idea why i've re-written the functions when i could've 
just created a general function
*/
document.addEventListener("keydown", (event) => {
  const overFlow = document.getElementById("vidLayout");
  if (event.key === "Escape" && overFlow.style.display === "flex") {
    const vidPlayer = document.getElementById("vidPlayer");
    vidPlayer.pause();
    overFlow.style.display = "none";
  }
});

class Video extends Component {
  closeAndVid() {
    console.log("here");
    const overFlow = document.getElementById("vidLayout");
    const vidPlayer = document.getElementById("vidPlayer");
    vidPlayer.pause();
    overFlow.style.display = "none";
  }

  openVid() {
    const overFlow = document.getElementById("vidLayout");
    const vidPlayer = document.getElementById("vidPlayer");
    overFlow.style.display = "flex";
    vidPlayer.play();
  }

  render() {
    return (
      <div className="presentation">
        <div>
          <Fade bottom>
            <div className="presentationDescription">
              <h1 className="heading2">
                <span>Taste</span> a delicious food here in Nigeria, inspired{" "}
                <span>since</span> 1000BC !
              </h1>
              <p className="descriptionText2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                tempora cumque eligendi in nostrum labore omnis quaerat.
              </p>
            </div>
          </Fade>
        </div>
        <div className="block-2">
          <Fade bottom>
            <div
              style={{ backgroundImage: `url(${"/images/food1.jpg"})` }}
              className="backgroundFix descImg"
            ></div>
          </Fade>
          <Fade bottom>
            <div className="backgroundFix videoBg">
              <div className="vidDescription">
                <h1>Expect The Very Best !</h1>
                <span
                  onClick={this.openVid}
                  title="Play Video"
                  className="icon-play2"
                ></span>
              </div>
              <div
                style={{ display: "none" }}
                id="vidLayout"
                className="vidOverflow"
              >
                <div className="videoContainer">
                  <video id="vidPlayer" controls src="video/vid.mp4"></video>
                </div>
                <span
                  title="Close Video"
                  onClick={this.closeAndVid}
                  className="cancelBtn icon-cross2"
                ></span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Video;
