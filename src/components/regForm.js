import React from 'react'
import Header1 from './header1'
import NavHeader from './navHeader'
import Footer from './footer'
import RSection1 from './regSection/rSection1'
import RSection2 from './regSection/rSection2'

class RegForm extends React.Component{
    render(){
        return(
            <div>
                <Header1 />
                <NavHeader />
                <RSection1 />
                <RSection2 />
   




                <Footer />
            </div>
        )
    }
}

export default RegForm;