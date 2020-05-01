import React from 'react'
import Instagram from './Instagram'
import Meet from './Meet'
import Contact from './Contact'


class BaseSectionRender extends React.Component {

    render () {
        
        return (
            <div>
                <Instagram />
                <Meet />
                <Contact />
            </div>
        )
    }
}

export default BaseSectionRender