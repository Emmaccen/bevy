import React from "react";
import { Link } from "react-router-dom";

class PagesMaps extends React.Component {
  render() {
    return (
      <div className="pageMaps">
        <div>
          <i className={this.props.icon}></i>
          <h1>{this.props.pageText}</h1>
          <Link to="/">
            <span className="prevPage">Home</span> |
          </Link>
          <span>{this.props.currentPage}</span>
        </div>
      </div>
    );
  }
}

export default PagesMaps;
