import React, {Component} from 'react'
import Button from '../Button'

class IntroText extends Component {

    constructor() {
      super()

      this.state = {
        intro : ''
      }
    }

  render () {
    return (
      <div className='introTextContainer'>
        <div><h1>Hello There !</h1></div>
          <div><h1 id='showCase'>Wonderful Taste And Beautiful Place</h1></div>
          <div>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className='buttonContainer'>
            <div>
              <Button
              buttonText = 'Order Now'
              />
            </div>
            <div>
              <Button
              buttonText = 'View Menu'
              />
            </div>
          </div>
      </div>
    )
  }
}

export default IntroText
