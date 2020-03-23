import React from 'react'

class LSection2 extends React.Component{
    render(){
        return(
            <div>
                

<section>
  <div className="container">
    <div className="text-center">
      <h2>Login</h2>
      <p>Select the profile from Talent or Employer, and log in to your account.</p>
    </div>
    
    <div className="row">
      <div className="col-lg-8 offset-2">
        <div className="row">
          <div className="col-lg-12">
            <div className="lf">
              <input type="text" placeholder="UserName" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="lf">
              <input type="text" placeholder="Password" />
            </div>
          </div>
         
          <div className="col-lg-12">
            <div className="lf">
              <a href="#" className="btn btn-primary">Submit</a>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="lf-signup">
              <a href="signup.html"> Or SignUp</a>
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

export default LSection2;