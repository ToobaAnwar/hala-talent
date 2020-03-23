import React from 'react'
import NavHeader from './navHeader'
import Footer from './footer'
import Header1 from './header1';
import S1Section1 from './s1Section/s1Section1';
import S1Section2 from './s1Section/s1Section2';


class SignUp1 extends React.Component{
    render(){
        return(
            <div>
            <Header1 />
            <NavHeader />
            <S1Section1 />
            <S1Section2 />

            <Footer />
            </div>
        )
    }
}

export default SignUp1;