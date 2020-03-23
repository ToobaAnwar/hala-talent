import React from 'react'
import Header1 from './header1'
import NavHeader from './navHeader'
import Footer from './footer'
import B2Section1 from './blog2Section/b2Section1'
import B2Section2 from './blog2Section/b2Section2'

class Blog2 extends React.Component{
    render(){
        return(
            <div>
                <Header1 />
                <NavHeader />
                <B2Section1 />
                <B2Section2 />
  
<Footer />
            </div>

        )
        
    }
}

export default Blog2;