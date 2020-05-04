import React from 'react'

class Navigation extends React.Component {

  // scrollToView(element){
  //   document.getElementById(element).scrollIntoView({
  //   behavior: 'smooth'
  // });

  closeNav () {
    document.querySelector('.navigation').style.display = 'none'
    // document.getElementById('navIcon').style.
  }
  openNav () {
    let nav = document.querySelector('.navigation')
    nav.style.display = 'block'
    nav.style.WebkitAnimation = "fadeIn 1.3s"; // Code for Chrome, Safari and Opera
    nav.style.animation = "fadeIn 1.3s";     // Standard syntax
  }

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

          <span style={{display : 'none'}} class="closeBtn" onClick={()=> this.closeNav()}>&times;</span>

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
                <span onClick={()=> this.openNav()} title='Open Menu' className='menuIcon icon icon-menu'></span>
          </div>

        </nav>
      </div>
    )
  }
}

export default Navigation
