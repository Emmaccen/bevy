import React from 'react'
import Navigation from './components/topSectionContainer/Navigation'
import PageMaps from './components/PageMaps'

class BlogPage extends React.Component {


    render () {
        return (
            <div className='backgroundFix blogPage page'>
                <Navigation />
                    <div className='pageMapContainer'>
                        <PageMaps 
                        icon = 'iconFlat icon-book-open'
                        pageText = 'Blogs'
                        currentPage = 'Blogs'/>
                    </div>
            </div>
        )
    }
}

export default BlogPage