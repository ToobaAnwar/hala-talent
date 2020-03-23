import React from 'react';
import Header1 from './header1'
import NavHeader from './navHeader'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from './section4'
import Section5 from './section5';
import Section6 from './section6';
import Section7 from './section7';
import Section8 from './section8';
import Footer from './footer';

class Dashboard extends React.Component{

    render(){
        return(
            <div>
                 <Header1 />
  <NavHeader />
<Section1 />
<Section2 />
<Section3 />
<Section4 />
<Section5 />
<Section6 />
<Section7 />
<Section8 />
<Footer />
            </div>
        )
    }
}

export default Dashboard;