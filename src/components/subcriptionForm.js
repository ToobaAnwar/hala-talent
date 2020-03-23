import React from 'react'
import Header1 from './header1'
import NavHeader from './navHeader'
import Footer from './footer'
import SubFormSection1 from './subFormSection/subFormSection1'
import SubFormSection2 from './subFormSection/subFormSection2'

class Subscriptionform extends React.Component{
    render(){
        return(
            <div>
                <Header1 />
                <NavHeader />
                <SubFormSection1 />
                <SubFormSection2 />
                <Footer />

            </div>
        )
    }
}

export default Subscriptionform;