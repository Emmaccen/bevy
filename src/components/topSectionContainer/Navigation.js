import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'


class Navigation extends React.Component {

  // scrollToView(element){
  //   document.getElementById(element).scrollIntoView({
  //   behavior: 'smooth'
  // });

  openNav () {
    $('.navigation').fadeIn()
  }
  closeNav () {
    $('.navigation').fadeOut()
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

          <span onClick={this.closeNav} style={{display : 'none'}} className="closeBtn">&times;</span>

            <ul className='menuLinks'>
              <Link to='/'>
                <li id='home'>Home</li>
              </Link>
              <Link to='/MenuPage'>
                <li id='menu'>Menu</li>
              </Link>

                <li id='services'>Services</li>

              <Link to='/BlogPage'>
                <li id='blogs'>Blogs</li>
              </Link>
              <Link to='/AboutPage'>
                <li id='about'>About</li>
              </Link>
              <Link to='/ContactPage'>
                <li id='contact'>Contact</li>
              </Link>
            </ul>
          </div>

          <div className='cart centered'>
                <span title='Open Cart' className="icon icon-cart"></span>
                <span id='cartNumber'>3</span>
                <span onClick={this.openNav} title='Open Menu' className='menuIcon icon icon-menu'></span>
          </div>

        </nav>
      </div>
    )
  }
}

export default Navigation
