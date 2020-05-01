import React, {Component} from 'react'

class Button2 extends Component {
    
  render () {
    return (
      <div className='button2'>
        <button>{this.props.buttonText}</button>
      </div>
    )
  }
}

export default Button2
