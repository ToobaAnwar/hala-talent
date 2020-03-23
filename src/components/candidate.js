import React from 'react'
import Header1 from './header1'
import NavHeader from './navHeader'
import Footer from './footer'
import CandSection1 from './candListSection/clSection1'
import CandSection2 from './candListSection/clSection2'

class Candidate extends React.Component{
    render(){
        return(
            <div className='App'>
            <Header1 />
            <NavHeader />
            <CandSection1 />
            <CandSection2 />

            <Footer />
            </div>
        )
    }
}

export default Candidate;