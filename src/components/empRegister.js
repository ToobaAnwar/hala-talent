import React from 'react'
import Header1 from './header1'
import NavHeader from './navHeader'
import Footer from './footer'
import ERegSection1 from './empRegSection/eRegSection1'
import ERegSection2 from './empRegSection/eRegSection2'

class EmpRegister extends React.Component{
    render(){
        return(
            <div>
                <Header1 />
                <NavHeader />
               <ERegSection1 />
               <ERegSection2 />
                <Footer />

            </div>
        )
    }
}

export default EmpRegister;