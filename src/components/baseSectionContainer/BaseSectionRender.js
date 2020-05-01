import React from 'react'
import Meet from './Meet'
import Contact from './Contact'


class BaseSectionRender extends React.Component {

    render () {
        
        return (
            <div>
                <Meet />
                <Contact />
            </div>
        )
    }
}

export default BaseSectionRender