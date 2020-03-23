import React from 'react'
import Header1 from './header1'
import NavHeader from './navHeader'
import Footer from './footer'
import PSection1 from './privacySection/pSection1'
import PSection2 from './privacySection/pSection2'

class Privacy extends React.Component{
    render(){
        return(
            <div>
                <Header1 />
                <NavHeader />
                <PSection1 />
                <PSection2 />
    
                <Footer />


            </div>
        )
    }
}

export default Privacy;