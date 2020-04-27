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
                    <p className='descriptionText2'>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        sunt in culpa qui officia deserunt. Holla !
                    </p>
                </div>
            </div>
        </div>
        )
    }
}

export default Welcome