import React, {Component} from 'react'
import Navigation from './Navigation'
import IntroText from './IntroText'
import QuickContact from './QuickContact'
import QuickServices from './QuickServices'
import $ from 'jquery'
// import Stroy from './Story'

import Welcome from './Welcome'

 // code snippet for the changing background 

 const introTexts = ['Wonderful Taste And Beautiful Place', 'Paradise Of Comfort And Satisfaction']
 const backgroundImages = ['/images/homeBg1.jpg', '/images/homeBg2.jpg']
 let index = 0;

 function changeBackgroundImage () {
       setInterval(()=> {
   if(index === 2){
     index = 0
     $('#showCase').text(introTexts[index])
     $('#background').css('backgroundImage', `url(${backgroundImages[index]})`)
     index ++
 }else {
     $('#showCase').text(introTexts[index])
     $('#background').css('backgroundImage', `url(${backgroundImages[index]})`)
     index ++
 }
  }, 10000)
 }
 changeBackgroundImage()

class TopSectionRender extends Component {

  render () {
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
