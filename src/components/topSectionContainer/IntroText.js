import React, {Component} from 'react'
import Button from '../Button'

const introTexts = ['one thing', 'two thing']

class IntroText extends Component {

    constructor() {
      super()

      this.state = {
        intro : 'Amazing Taste And Beautiful Place'
      }

    }

  render () {
    return (
      <div className='introTextContainer'>
        <div><h1>Hello There !</h1></div>
          <div><h1>{this.state.intro}</h1></div>
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
