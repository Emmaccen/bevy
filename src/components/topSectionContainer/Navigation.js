import React from 'react'


class Navigation extends React.Component {

  // scrollToView(element){
  //   document.getElementById(element).scrollIntoView({
  //   behavior: 'smooth'
  // });

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

          <div id='anim' className='navigation'>

          <span style={{display : 'none'}} className="closeBtn">&times;</span>

            <ul className='menuLinks'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              {/* <li><a href="#">Support</a></li> */}
            </ul>
          </div>

          <div className='cart centered'>
                <span title='Open Cart' className="icon icon-cart"></span>
                <span id='cartNumber'>3</span>
                <span title='Open Menu' className='menuIcon icon icon-menu'></span>
          </div>

        </nav>
      </div>
    )
  }
}

export default Navigation
