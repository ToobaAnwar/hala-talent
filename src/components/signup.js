import React from 'react'
import Header1 from './header1'
import NavHeader from './navHeader'
import Footer from './footer'
import SuSection1 from './signupSection/sSection1'
import SuSection2 from './signupSection/sSection2'

class Signup extends React.Component{
    render(){
        return(
            <div>
                <Header1 />
                <NavHeader />
                <SuSection1 />
                <SuSection2 />

                <Footer />
            </div>
        )
    }
}

export default Signup;