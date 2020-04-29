import React from 'react'
import QuickMenu from './QuickMenu'
import Video from './Video'
import Reservations from './Reservations'
import Blogs from './Blogs'



class MiddleSectionRender extends React.Component {

    render () {

        return (
            <div>
                <QuickMenu />
                <Video />
                <Reservations />
                <Blogs />
            </div>
        )
    }
}

export default MiddleSectionRender