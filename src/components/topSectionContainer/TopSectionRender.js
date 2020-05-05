import React, {Component} from 'react'
import Navigation from './Navigation'
import IntroText from './IntroText'
import QuickContact from './QuickContact'
import QuickServices from './QuickServices'
// import Stroy from './Story'

import Welcome from './Welcome'

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
