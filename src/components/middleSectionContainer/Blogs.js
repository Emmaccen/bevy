import React from "react";

class Blogs extends React.Component {
  render() {
    return (
      <div className="blogsWrapper">
        <div className="centered">
          <h1 className="heading2">Recent Blogs</h1>
        </div>

        <div className="blogs">
          <div>
            <div className="blogImgCover">
              <div
                style={{
                  backgroundImage: `url(${"/blogImgs/blog1.jpg"})`,
                  height: "350px",
                }}
                className="blogImg backgroundFix"
              ></div>
            </div>
            <div>
              <h2 className="heading2">
                <a href="https://emmaccen.netlify.app/">
                  How To Make Deserts In A Plane
                </a>
              </h2>
              <div>
                <ul>
                  <li>Emmaccen Emm</li>
                  <li>June 19, 2020</li>
                  <li>
                    <a href="https://emmaccen.netlify.app/">Desert</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="descriptionText2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  eligendi nobis ea maiores sapiente veritatis reprehe suscipit
                  quaerat rerum voluptatibus
                </p>
                <p>
                  <a href="https://emmaccen.netlify.app/">
                    Continue Reading ...
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="blogImgCover">
              <div
                style={{
                  backgroundImage: `url(${"/blogImgs/blog5.jpg"})`,
                  height: "450px",
                }}
                className="blogImg backgroundFix"
              ></div>
            </div>
            <div>
              <h2 className="heading2">
                <a href="https://emmaccen.netlify.app/">
                  The Biggest Winery In Tahoma
                </a>
              </h2>
              <div>
                <ul>
                  <li>Emmaccen Emm</li>
                  <li>June 19, 2020</li>
                  <li>
                    <a href="https://emmaccen.netlify.app/">Vegan</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="descriptionText2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  eligendi nobis ea maiores sapiente veritatis reprehe suscipit
                  quaerat rerum voluptatibus
                </p>
                <p>
                  <a href="https://emmaccen.netlify.app/">
                    Continue Reading ...
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="blogImgCover">
              <div
                style={{
                  backgroundImage: `url(${"/blogImgs/blog4.jpg"})`,
                  height: "500px",
                }}
                className="blogImg backgroundFix"
              ></div>
            </div>
            <div>
              <h2 className="heading2">
                <a href="https://emmaccen.netlify.app/">
                  Weight Loss Tips And Tricks
                </a>
              </h2>
              <div>
                <ul>
                  <li>Emmaccen Emm</li>
                  <li>June 19, 2020</li>
                  <li>
                    <a href="https://emmaccen.netlify.app/">Dinner</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="descriptionText2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  eligendi nobis ea maiores sapiente veritatis reprehe suscipit
                  quaerat rerum voluptatibus
                </p>
                <p>
                  <a href="https://emmaccen.netlify.app/">
                    Continue Reading ...
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
