import React from 'react'
import empPrf from '../../img/emp-prf.png'
import proCompany from '../../img/profile/promocompany.png'
import proView from '../../img/profile/promoreview.png'
import proTeam from '../../img/profile/promoteam.png'
import can2 from '../../img/candidate/candidate2.jpg'
import can3 from '../../img/candidate/candidate3.jpg'
import can4 from '../../img/candidate/candidate4.jpg'
import c1 from '../..//img/emp-comment1.jpg'
import c2 from '../..//img/emp-comment2.jpg'
import c3 from '../..//img/emp-comment3.jpg'
import promoPlace2 from '../../img/profile/promo-place2.png'
import { NavLink } from 'react-router-dom'

class EmpProSection2 extends React.Component{
    render(){
        return(
            <div>
                
<section className="can-proile-page">
  <div className="container">
    <div className="row">
      <div className="col-lg-10"></div>
      <div className="col-lg-2">
        <NavLink to="/edit_employer_profile" className="btn btn-danger mb-5" style={{float: "right"}}>Edit</NavLink>
      </div>
      <div className="col-lg-12">
        <div className="row">
        <div className="col-lg-12">
         <div className="row mb-5">
           <div className="col-lg-6">
              <div className="emp-prf">
            <img src={empPrf} alt="" /> 
          </div>
          <div className="emp-p-txt">
            <h4>Reliable Movers</h4>
            <ul>
              <li><a href="#">4.8</a></li>
              <li><i className="fa fa-star"></i></li>
              <li><i className="fa fa-star"></i></li>
              <li><i className="fa fa-star"></i></li>
              <li><i className="fa fa-star"></i></li>
            </ul>
            <span>3 reviews</span>
          </div>
           </div>
           <div className="col-lg-6">
             <div className="emp-p-b">
               <ul>
                 <li><a href="#" className="btn btn-primary"><i className="fa fa-plus"></i>Add a review</a></li>
                 <li><a href="#" className="btn btn-primary"><i className="fa fa-plus"></i>Follow</a></li>
               </ul>
             </div>
           </div>
         </div>
        </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12">
                    <h4 style={{fontSize: "22px", fontWeight: "600"}} className="mb-4">Overview</h4>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="profile-r">
                      <i className="fa fa-user"></i>
                      <h4>Sector</h4>
                      <p>Acounting</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="profile-r">
                      <i className="fa fa-map-marker"></i>
                      <h4>Location</h4>
                      <p>Karachi</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="profile-r">
                      <i className="fa fa-user"></i>
                      <h4>Viewed</h4>
                      <p>637</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="profile-r">
                      <i className="fa fa-user"></i>
                      <h4>Founded Since</h4>
                      <p>1850</p>
                    </div>
                  </div>
                   <div className="col-lg-12">
                    <div className="place-pic">
                        <img src={proCompany} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="profile-r-p">
                      <h4>Company Description</h4>
                      <p>Hello my name is Ariana Gande Connor and I’m a Financial Supervisor from Netherlands, Rotterdam. In pharetra orci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam ante accumsan ac est.</p>
                      <p>Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris nec</p>
                    </div>
                  </div>
                   <div className="col-lg-12">
                    <div className="place-pic">
                        <img src={proTeam} alt="" />
                    </div>
                  </div>
                 <div className="col-lg-12">
                  <h4 style={{fontSize: "22px", fontWeight: "600"}} className="mb-2 mt-4">Our Team</h4>
                   <div className="row">
                     <div className="col-lg-4">
                       <div className="candidate-grid">
                    <img src={can2} alt="" />
                    <h4>Lori Ramos</h4>
                    <h5>Property Agent</h5>
                    <h6>Pakistan</h6>
                     <p>Sector <span>Construction</span></p>
                  </div>
                     </div>
                     <div className="col-lg-4">
                       <div className="candidate-grid">
                    <img src={can3} alt="" />
                    <h4>Lori Ramos</h4>
                    <h5>Property Agent</h5>
                    <h6>Pakistan</h6>
                     <p>Sector <span>Construction</span></p>
                  </div>
                     </div>
                     <div className="col-lg-4">
                       <div className="candidate-grid">
                    <img src={can4} alt="" />
                    <h4>Lori Ramos</h4>
                    <h5>Property Agent</h5>
                    <h6>Pakistan</h6>
                     <p>Sector <span>Construction</span></p>
                  </div>
                     </div>
                   </div>
                 </div>
                  <div className="col-lg-12">
                    <div className="place-pic">
                        <img src={proView} alt="" />
                    </div>
                  </div>
                   <div className="col-lg-12">
                    <h4 style={{fontSize: "22px", fontWeight: "600"}} className="mt-4">Company Review</h4>
                    <div className="emp-p-coment">
                      <div className="emp-p-img">
                        <img src={c1} alt="" />
                      </div>
                      <div className="emp-p-tcomt">
                        <h4>Randall Warren</h4>
                        <ul>
                          <li><i className="fa fa-star"></i></li>
                          <li><i className="fa fa-star"></i></li>
                          <li><i className="fa fa-star"></i></li>
                          <li><i className="fa fa-star"></i></li>
                        </ul>
                        <p>Nulla facilisi. Cras venenatis lobortis nibh ut blandit. Maecenas at pellentesque lacus. Donec hendrerit tellus ac arcu egestas, at tristique sem facilisis.</p>
                        <span>December 8, 2017</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="emp-p-coment">
                      <div className="emp-p-img">
                        <img src={c2} alt="" />
                      </div>
                      <div className="emp-p-tcomt">
                        <h4>Randall Henderson</h4>
                        <ul>
                          <li><i className="fa fa-star"></i></li>
                          <li><i className="fa fa-star"></i></li>
                          <li><i className="fa fa-star"></i></li>
                          <li><i className="fa fa-star"></i></li>
                        </ul>
                        <p>Nulla facilisi. Cras venenatis lobortis nibh ut blandit. Maecenas at pellentesque lacus. Donec hendrerit tellus ac arcu egestas, at tristique sem facilisis.</p>
                        <span>December 8, 2017</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="emp-p-coment">
                      <div className="emp-p-img">
                        <img src={c3} alt="" />
                      </div>
                      <div className="emp-p-tcomt">
                        <h4>Peter Hawkins</h4>
                        <ul>
                          <li><i className="fa fa-star"></i></li>
                          <li><i className="fa fa-star"></i></li>
                          <li><i className="fa fa-star"></i></li>
                          <li><i className="fa fa-star"></i></li>
                        </ul>
                        <p>Nulla facilisi. Cras venenatis lobortis nibh ut blandit. Maecenas at pellentesque lacus. Donec hendrerit tellus ac arcu egestas, at tristique sem facilisis.</p>
                        <span>December 8, 2017</span>
                      </div>
                    </div>
                  </div> 
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
              <div className="place-pic">
              <img src={promoPlace2} alt="" />
            </div>
            <div className="profile-f">
              <h2>Contact Form</h2>
              <input type="text" placeholder="Enter Your Name" />
              <input type="text" placeholder="Enter Your Email Address" />
              <input type="text" placeholder="Enter Your Phone Number" />
              <textarea name="" id="" cols="30" rows="10">Enter Your Message</textarea>
              <button className="btn btn-primary">Send Now</button>
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

export default EmpProSection2;