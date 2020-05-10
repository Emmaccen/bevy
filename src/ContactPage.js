import React from 'react'
import Navigation from './components/topSectionContainer/Navigation'
import PageMaps from './components/PageMaps'

class ContactPage extends React.Component {


    render () {
        return (
            <div className='backgroundFix contactPage page'>
                <Navigation />
                <div className='pageMapContainer'>
                    <PageMaps 
                    icon = 'iconFlat flaticon-tray'
                    pageText = 'Contact'
                    currentPage = 'Contact'/>
                </div>
               
            </div>
        )
    }
}

export default ContactPage