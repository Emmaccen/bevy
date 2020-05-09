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

  // code snippet for the changing background 

  const introTexts = ['Wonderful Taste And Beautiful Place', 'Paradise Of Comfort And Satisfaction']
  const backgroundImages = ['/images/homeBg1.jpg', '/images/homeBg2.jpg']
  let index = 0;

  function changeBackgroundImage () {
    
    const showCase = document.getElementById('showCase')
    const homeBackground = document.getElementById('background')
        setInterval(()=> {
 if(index === 2){
    index = 0
    showCase.innerHTML = introTexts[index]
    homeBackground.style.backgroundImage = `url(${backgroundImages[index]})`
    index ++
 }else {
    showCase.innerHTML = introTexts[index]
    homeBackground.style.backgroundImage = `url(${backgroundImages[index]})`
    index ++
 }
        }, 10000)
  }

  try {
    console.log('changing....')
    changeBackgroundImage();
  } catch (error) {
    console.log('not in homepage, so cant change background ' + error)
  }

  // code snippet for the phone menu handler

  const menu = document.querySelector('.navigation')
  const menuIcon = document.querySelector('.menuIcon')
  const closeBtn = document.querySelector('.closeBtn')
  const nav = document.querySelector('.navigation')
  
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

};