import React from 'react'
import Header1 from './header1'
import NavHeader from './navHeader'
import Footer from './footer'
import B1Section1 from './blog1Section/b1Section1'
import B1Section2 from './blog1Section/b1Section2'

class Blog1 extends React.Component{
    render(){
        return(
            <div>
                <Header1 />
                <NavHeader />
                <B1Section1 />
                <B1Section2 />
                <Footer />

            </div>

        )
        
    }
}

export default Blog1;