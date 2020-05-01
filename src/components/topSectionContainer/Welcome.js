import React, {Component} from 'react'


class Welcome extends Component {


    render() {
        return(
        <div className='welcomeContainer'>
            <div style={{backgroundImage : `url(${'/images/welcomeBg.jpg'})`}} className='backgroundFix welcomeLeft'>

            </div>
            <div className='backgroundFix welcomeRight'>
                <div className='welcomeContentWrapper'>
                    <h1>Welcome To Bevily Foods</h1>
                    <p className='descriptionText'>
                        An old grandma brings a bus driver a bag of peanuts every day. 
                        First the bus driver enjoyed the peanuts but after a week of eating them he asked: 
                        "Please granny, don't bring me peanuts anymore. Have them yourself.".The granny answers: 
                        "You know, I don't have teeth anymore. I just prefer to suck the chocolate around them.
                        One company owner asks another: “Tell me, Bill, how come your employees are always on time in the mornings?” 
                        Bill replies: “Easy. 30 employees and 20 parking spaces.”
                    </p>
                </div>
            </div>
        </div>
        )
    }
}

export default Welcome