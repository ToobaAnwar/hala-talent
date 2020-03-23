import React from 'react'
import Header1 from './header1'
import NavHeader from './navHeader'
import Footer from './footer'
import PerSection1 from './perSection/perSection1'
import PerSection2 from './perSection/perSection2'

class PersonalityTest extends React.Component{
    render(){
        return(
            <div>
                <Header1 />
                <NavHeader />
                <PerSection1 />
                <PerSection2 />
                <Footer />
            </div>
        )
    }
}

export default PersonalityTest;