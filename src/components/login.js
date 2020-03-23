import React from 'react'
import Header1 from './header1'
import NavHeader from './navHeader'
import Footer from './footer'
import LSection1 from './loginSection/lSection1'
import LSection2 from './loginSection/lSection2'

class Login extends React.Component{
    render(){
        return(
            <div>
              <Header1 />
              <NavHeader />
              <LSection1 />
              <LSection2 />
 
              <Footer />
            </div>
        )
    }
}

export default Login;