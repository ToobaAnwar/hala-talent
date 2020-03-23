import React from 'react'
import blog1 from "../img/blog1.jpg"
import blog2 from "../img/blog2.jpg"
import blog3 from "../img/blog3.jpg"
import { NavLink } from 'react-router-dom'

class Section7 extends React.Component{

    render(){
        return(
            <div>
             <section className="blog">
    <div className="container">
      <div className="text-center">
        <h2 className="animated bounce">Blog's</h2>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-4">
              <div className="one-third animated bounceInDown">
                <img src={blog1} className="img-responsive" alt="" />
                <span>IT Contractor</span>
                <h2>1.  Fast and unique way to get hired by employers at Hala Talents! (For Talents) </h2>
                <p>Hala Talents, a platform designed to help the talent and employers to interact and discover an opportunity that benefits each other.
</p>
                  <NavLink to="/blog1" style={{textDecoration: "none"}}>Read More...</NavLink>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="one-third animated bounceInDown">
                <img src={blog2} className="img-responsive" alt="" />
                <span>Acountancy</span>
                <h2>2.  Employers! Finding the Best Talent is Just one Click away!(for Employers)</h2>
                <p>Hala Talents is one of the best talents hunting portals with its unique way of fast recruitmentby using AI powered tool. Strange! </p>
                  <NavLink to="/blog2" style={{textDecoration: "none"}}>Read More...</NavLink>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="one-third animated bounceInDown">
                <img src={blog3} className="img-responsive" alt="" />
                <span>Charity & Voluntary</span>
                <h2>HTML & Css Developer ( 1 - 2 Yrs Exp.)</h2>
                <p>Ravenously while stridently coughed far<br />
                 promiscuosly below jeez much yikes bland that<br />
                  salamander cunoutdid</p>
                  <NavLink to="/blog1" style={{textDecoration: "none"}}>Read More...</NavLink>
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

export default Section7;