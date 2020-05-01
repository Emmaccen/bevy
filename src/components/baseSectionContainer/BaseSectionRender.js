import React from 'react'
import Instagram from './Instagram'
import Contact from './Contact'


class BaseSectionRender extends React.Component {

    render () {
        
        return (
            <div>
                <Instagram />
                <Contact />
            </div>
        )
    }
}

export default BaseSectionRender