import React from 'react'


class Instagram extends React.Component {

    render () {
        return (
            <div className='instaPostsWrapper'>
                <div className='instaHeader'>
                    <div>
                        <h1 className='heading2'>Latest From <span className='highlight'>Instagram</span></h1>
                        <p className='descriptionText2'>One company owner asks another: “Tell me, Bill, how come your employees are always on time 
                            in the mornings?” Bill replies: “Easy. 30 employees and 20 parking spaces.”
                        </p>
                    </div>
                </div>

                <div className='instaPostsContainer'>

                    <div className='grid-1'>
                        <div style={{backgroundImage : `url(${'instaImages/1.jpg'}`}} className='backgroundFix instaBg'>
                            <div className='iconOverlay'>
                                <a href='#' className='iconFlat icon-instagram2'></a>
                            </div>
                        </div>
                        <div className='split'>
                            <div style={{backgroundImage : `url(${'instaImages/2.jpg'}`}} className='backgroundFix instaBg'>
                                <div className='iconOverlay'>
                                    <a href='#' className='iconFlat icon-instagram2'></a>
                                </div>
                            </div>
                            <div style={{backgroundImage : `url(${'instaImages/3.jpg'}`}} className='backgroundFix instaBg'>
                                <div className='iconOverlay'>
                                    <a href='#' className='iconFlat icon-instagram2'></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid-2'>

                        <div className='split'>
                            <div style={{backgroundImage : `url(${'instaImages/4.jpg'}`}} className='backgroundFix instaBg'>
                                <div className='iconOverlay'>
                                    <a href='#' className='iconFlat icon-instagram2'></a>
                                </div>
                            </div>
                            <div style={{backgroundImage : `url(${'instaImages/5.jpg'}`}} className='backgroundFix instaBg'>
                                <div className='iconOverlay'>
                                    <a href='#' className='iconFlat icon-instagram2'></a>
                                </div>
                            </div>
                        </div>

                        <div style={{backgroundImage : `url(${'instaImages/6.jpg'}`}} className='backgroundFix instaBg'>
                                <div className='iconOverlay'>
                                    <a href='#' className='iconFlat icon-instagram2'></a>
                                </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Instagram