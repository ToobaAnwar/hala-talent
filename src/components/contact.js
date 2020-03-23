import React from 'react'
import Header1 from './header1'
import Footer from './footer'
import NavHeader from './navHeader'
import CuSection1 from './contactSection/cuSection1'
import CuSection2 from './contactSection/cuSection2'
import CuSection3 from './contactSection/cusection3'

class Contact extends React.Component{
    render(){
        return(
            <div>
                <Header1 />
                <NavHeader />
                <CuSection1 />
                <CuSection2 />
                <CuSection3 />



                <Footer />
            </div>
        )
    }
}

export default Contact;