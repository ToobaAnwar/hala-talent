import React from 'react'
import Header1 from './header1'
import NavHeader from './navHeader'
import Footer from './footer'
import ECandProSection1 from './eCandProSection/ECandProSection1'
import ECandProSection2 from './eCandProSection/ECandProSection2'

class EditCandidateProfile extends React.Component{
    render(){
        return(
            <div>
                <Header1 />
                <NavHeader />
                <ECandProSection1 />

                <ECandProSection2 />

                <Footer />

            </div>
        )
    }
}

export default EditCandidateProfile;