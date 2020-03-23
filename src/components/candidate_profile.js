import React from 'react'
import Header1 from './header1'
import Footer from './footer'
import NavHeader from './navHeader'
import CSection1 from './candidateSection/cSection1'
import CSection2 from './candidateSection/cSection2'

class CandidateProfile extends React.Component{
   render(){
       return(
           <div>
               <Header1 />
               <NavHeader />
              <CSection1 />

              <CSection2 />



               <Footer />
           </div>
       )
   }

}

export default CandidateProfile;