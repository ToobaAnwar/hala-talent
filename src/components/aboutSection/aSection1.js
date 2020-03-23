import React from 'react'
import about from '../../img/about-2.jpg'
import { NavLink } from 'react-router-dom';

class ASection1 extends React.Component{

    render(){
        return(
            <div className='App'>
                 <div className="container-fluid">
             <div className="emp-bg">
 		<div className="row">
 			<div className="col-lg-12">
 				<div className="emp-iner">
 					<div className="text-center">
 						<h2 style={{color: 'white'}}>About Us</h2>
 					</div>
 				</div>
 			</div>
 		</div>
 	</div>
 </div>
 
<div className="container">
  <div className="row">
    <div className="col-lg-12">
      <div className="about">
        <div className="row">
        <div className="col-lg-6">
          <div className="about-lf">
            <img src={about} className="img-responsive" height="400px;" width="100%;" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-rt">
            <h2>A high-tech AI powertool, instantly connecting talents and employers.</h2>
            <p>
Hala Talents is a digitized AI powertool, providing a digital  platform, where talents and employers meet and greet through a efficient and hassle-free registration in no time 
               
            </p>
            <br />
            <br />
            <br />
            <br />
            <NavLink to="/signup" className="btn btn-primary mt-3" style={{marginTop:'20%'}}>Join us Now</NavLink>
                  {/* <!-- <button className="btn btn-info mt-3">Jion us Now</button> --> */}
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
            </div>
        )
    }
}

export default ASection1;