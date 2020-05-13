import React from 'react'
import Navigation from './components/topSectionContainer/Navigation'
import PageMaps from './components/PageMaps'
import Contact from './components/baseSectionContainer/Contact'
import Footer from './components/baseSectionContainer/Footer'

class ContactPage extends React.Component {


    render () {
        return (
            <div>
                <div className='backgroundFix contactPage page'>
                    <Navigation />
                    <div className='pageMapContainer'>
                        <PageMaps 
                        icon = 'iconFlat flaticon-tray'
                        pageText = 'Contact'
                        currentPage = 'Contact'/>
                    </div>
                </div>
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default ContactPage