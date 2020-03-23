import React from 'react'

class Section6 extends React.Component{
    render(){
        return(
            <div>
           <section className="work1">
    <div className="container">
      <div className="text-center">
        <h2 className="animated bounce">How it Work</h2>
        <p className="animated bounce">A smart innovation for job recruitment - Click, Find, Hire, and you are all done!</p>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-4">
              <div className="work animated bounceInLeft">
                <i className="fa fa-user"></i>
                <h2>Create An Acount</h2>
                <p>Register now with valid information,<br />
                 and subscribe us now.</p>
              </div>
            </div>
            <div className="col-lg-4">
               <div className="work animated bounceInLeft">
                <i className="fa fa-user" style={{color: '#0fb76b', backgroundColor: '#d9eeec'}}></i>
                <h2>Find & Hire</h2>
                <p>After the account approval start finding<br />the best talents</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="work animated bounceInLeft">
                <i className="fa fa-user" style={{color: '#c580ff', backgroundColor: '#ece8fb'}}></i>
                <h2>Start Work</h2>
                <p>After selection, take an interview and<br />
                 start the hiring process.</p>
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

export default Section6;