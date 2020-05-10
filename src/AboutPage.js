import React from 'react'
import Navigation from './components/topSectionContainer/Navigation'
import PageMaps from './components/PageMaps'

class AboutPage extends React.Component {


    render () {
        return (
            <div className='backgroundFix aboutPage page'>
                <Navigation />
                    <div className='pageMapContainer'>
                        <PageMaps 
                        icon = 'iconFlat flaticon-pancake'
                        pageText = 'About Us'
                        currentPage = 'About'/>
                    </div>  
            </div>
        )
    }
}

export default AboutPage