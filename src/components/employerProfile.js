import React from 'react'
import Header1 from './header1'
import NavHeader from './navHeader'
import Footer from './footer'
import EmpProSection1 from './empProSection/empProSection1'
import EmpProSection2 from './empProSection/empProSection2'

class EmployerProfile extends React.Component{
    render(){
        return(
            <div>
                <Header1 />
                <NavHeader />
                <EmpProSection1 />
                <EmpProSection2 />
            




                <Footer />
            </div>
        )
    }
}

export default EmployerProfile;