import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';

class SuSection2 extends React.Component{
    render(){
        return(
            <div>
                

<section>
  <div className="container">
    <div className="text-center">
      <h2>SignUp</h2>
      <p>Register now and become the part of outstanding talents pool across the MENA</p>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6">
            <div className="tf">
              <NavLink to="/signup" className="tactive" style={{paddingRight: "195px"}}>Candidate</NavLink>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tf">
              <NavLink to="/signup1">Employer</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6">
            <div className="lf">
              <input type="text" placeholder="First Name" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lf">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lf">
              <input type="text" placeholder="Email Address" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lf">
              <input type="text" placeholder="Password" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lf">
              <input type="text" placeholder="Confirm Password" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lf">
             <input type="number" placeholder="Phone Number" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="lf">
              <select name="" id="">
                <option value="">Select Category</option>
                <option value="">Softwere & IT Development</option>
                <option value="">Agriculture</option>
                <option value="">Acountant</option>
              </select>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="lf">
              <NavLink to="/quiz" className="btn btn-primary">Submit</NavLink>
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

export default withRouter(SuSection2);