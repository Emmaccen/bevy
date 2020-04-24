import React from 'react'

class Navigation extends React.Component {

  render(){
    return (
      <div className="navContainer">
        <nav className="container">
          <div className='homeLink'>
            <div>
              <span className='icon icon-leaf'></span>
                Bevily
              <span>Foods</span>
            </div>
          </div>

          <div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div className='cart centered'>
            <span className="icon icon-cart"></span>
            <span>3</span>
          </div>

        </nav>
      </div>
    )
  }
}

export default Navigation
