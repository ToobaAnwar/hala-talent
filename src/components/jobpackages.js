import React from 'react'
import Header1 from './header1'
import Footer from './footer'
import NavHeader from './navHeader'
import JSection1 from './jobSection/jSection1'
import JSection2 from './jobSection/jSection2'

class JobPacakegs extends React.Component{
render(){
    return(
        <div>
            <Header1 />
            <NavHeader />
             <JSection1 />
 	
           <JSection2 />



            <Footer />
        </div>
    )
}
}

export default JobPacakegs;