import React from 'react'
import Section1 from './section1'
import { NavLink } from 'react-router-dom';

class Section2 extends React.Component{
    render(){
        return(
            <div>
                <section className="emp-can">
    <div className="container-fluid">
      <div className="text-center">
        <h2 className="animated bounce">A smart innovation for job recruitment</h2>
      </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="cm">
              <div className="row">
              <div className="col-lg-6">
                <div className="emp animated bounceInLeft">
                  <div className="emp-txt">
                    <h2>I'm a Employer</h2>
                    <p>By just paying a subscription fee you are able to find the best talent from all over the MENA. </p>
                        <NavLink to="/signup1">CREATE ACCOUNT</NavLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="can animated bounceInRight">
                  <div className="can-txt">
                    <h2>I'm a Talent</h2>
                    <p>Register now and get a chance to be hired by one of the best employers in the MENA.</p>
                        <NavLink to="/signup">CREATE ACCOUNT</NavLink>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  </section>
            </div>
        )
    }
}

export default Section2;