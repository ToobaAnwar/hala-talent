import React from 'react'
import Header1 from './header1.js'
import NavHeader from './navHeader'
import Footer from './footer'
import SubStatusSection1 from './subStatusSection/subStatusSection1.js'
import SubStatusSection2 from './subStatusSection/subStatusSection2.js'


class SubscriptionStatus extends React.Component{
    render(){
        return(
            <div>
                <Header1 />
                <NavHeader />
                <SubStatusSection1 />
                <SubStatusSection2 />
                <Footer />
          </div>
        )
    }
}

export default SubscriptionStatus;