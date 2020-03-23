import React from 'react'

class ERegSection2 extends React.Component{
    render(){
        return(
            <div>
    
<section>
  <div className="container">
    <div className="text-center">
      <h2>Register Form</h2>
      <p>Register now and become the part of outstanding talents pool across the MENA</p>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6">
            <div className="lf">
              <input type="text" placeholder="User ID" required />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lf">
              <input type="text" placeholder="First Name" required />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lf">
              <input type="text" placeholder="Last Name" required />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lf">
             <input type="number" placeholder="Contact Number" required />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lf">
              <input type="email" placeholder="Email" required />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lf">
              <input type="password" placeholder="Password" required />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="lf">
              <input type="number" placeholder="Employer Id" required /> 
            </div>
          </div>
          
          <div className="col-lg-12">
            <div className="lf">
              <a href="#" className="btn btn-primary">Submit</a>
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

export default ERegSection2;