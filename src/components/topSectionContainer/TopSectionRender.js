import React, {Component} from 'react'
import Navigation from './Navigation'
import IntroText from './IntroText'

class TopSectionRender extends Component {

  render () {

    return (
      <div>
        <div className="homeSectionContainer">
          <Navigation />
          <IntroText />
        </div>
      </div>
    )
  }
}

export default TopSectionRender
