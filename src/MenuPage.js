import React from 'react'
import Navigation from './components/topSectionContainer/Navigation'
import PageMaps from './components/PageMaps'

class MenuPage extends React.Component {


    render () {
        return (
            <div className='backgroundFix menuPage page'>
                <Navigation />
                    <div className='pageMapContainer'>
                        <PageMaps 
                        icon = 'iconFlat flaticon-chicken'
                        pageText = 'Menu'
                        currentPage = 'Menu'/>
                    </div>
            </div>
        )
    }
}

export default MenuPage