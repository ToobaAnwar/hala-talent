import React from 'react'
import Header1 from './header1'
import Footer from './footer'
import NavHeader from './navHeader'
import BSection1 from './blogSection/bSection1'
import BSection2 from './blogSection/bSection2'

class Blogs extends React.Component{
    render(){
        return(
            <div>
                <Header1 />
                <NavHeader />
               <BSection1 />
                <BSection2 />

                <Footer />

            
            </div>
        )
    }
}

export default Blogs;