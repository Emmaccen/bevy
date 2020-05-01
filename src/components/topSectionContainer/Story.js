import React, {Component} from 'react'


class Story extends Component {

    render () {
        return (
            <div className='storyContainer'>
                <div className='backgroundFix storySideImage'>

                </div>
                <div className='storyContentWrapper'>
                    <div className='storyContent'>
                        <h1 className='heading2'>Welcome To Bevily Foods</h1>
                        <p className='descriptionText2'>
                        An old grandma brings a bus driver a bag of peanuts every day. 
                        First the bus driver enjoyed the peanuts but after a week of eating them he asked: 
                        "Please granny, don't bring me peanuts anymore. Have them yourself.".The granny answers: 
                        "You know, I don't have teeth anymore. I just prefer to suck the chocolate around them.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Story