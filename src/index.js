import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.onload = function() {
  console.log('loaded')
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();

window.onload = ()=> {
  // code snippet for the phone-type menu display

  const menu = document.querySelector('.navigation')
  
  window.addEventListener('resize', ()=> {
    if(window.innerWidth >= 850){
      menu.style.display = 'block'
    }else {
      menu.style.display = 'none'
      // use this is you don't want fade effect on resize
    //   nav.style.WebkitAnimation = ""; // Code for Chrome, Safari and Opera
    // nav.style.animation = "";     // Standard syntax
    }
  })
  // keeping this code commented just in case i might need it in the future
  // even tho i doubt i'll ever have to need it :)

/* 
  function closeNav () {
    nav.style.WebkitAnimation = "fadeOut 1s"; // Code for Chrome, Safari and Opera
    nav.style.animation = "fadeOut 1s";     // Standard syntax
    setTimeout(()=> {
      menu.style.display = 'none'
    }, 900)
  }
 function openNav () {
    nav.style.display = 'block'
    nav.style.WebkitAnimation = "fadeIn 1s"; // Code for Chrome, Safari and Opera
    nav.style.animation = "fadeIn 1s";     // Standard syntax
  }
  menuIcon.onclick = ()=> {
    openNav()
  }
  closeBtn.onclick = ()=> {
    closeNav()
  }
  */

};