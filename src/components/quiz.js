import React from 'react'
import Header1 from './header1'
import NavHeader from './navHeader'
import Footer from './footer'
import QSection1 from './quizSection/qSection1'

import {NavLink} from 'react-router-dom';
import QSection2 from './quizSection/qSection2'

class Quiz extends React.Component{
    render(){
        return(
            <div>
                <Header1 />
                <NavHeader />
                <QSection1 />
                <QSection2 />
              
     

                <Footer />
            </div>
        )
    }
}

export default Quiz;