import React, {Component} from 'react'
import Navigation from './Navigation'
import IntroText from './IntroText'
import QuickContact from './QuickContact'
import QuickServices from './QuickServices'
// import Stroy from './Story'

import Welcome from './Welcome'

const introTexts = ['Wonderful Taste And Beautiful Place', 'Paradise Of Comfort And Satisfaction']
const backgroundImages = ['images/homeBg1.jpg', 'images/homeBg2.jpg']
let index = 0;

class TopSectionRender extends Component {

  render () {

    window.onload = ()=> {
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

    return (
      <div>
        <div id='background' className="homeSectionContainer">
          <Navigation />
          <IntroText />
        </div>
        <QuickContact />
        <QuickServices />
        <Welcome />
      </div>
    )
  }
}

export default TopSectionRender
