import React from 'react'
import Candidate1 from '../../img/candidate/candidate1.jpg'
import promoplaced from '../../img//profile/promo-placed.png'
import promoplacee from '../../img/profile/promo-placee.png'
import promoplaceex from '../../img/profile/promo-placeex.png'
import promoplaceexp from '../../img/profile/promo-placeexpertise.png'
import promoplacep from '../../img/profile/promo-placep.png'
import port1 from '../../img/candidate/portfolio/port1.jpg'
import port2 from '../../img/candidate/portfolio/port2.jpg'
import port3 from '../../img/candidate/portfolio/port3.jpg'
import promovideo from '../../img/profile/promo-placev.png'
import promohonor from '../../img/profile/promo-placeh.png'
import promoover from '../../img/profile/promo-placeo.png'
import promoplace2 from '../../img/profile/promo-place2.png'
import { NavLink } from 'react-router-dom'
import axios  from 'axios';


class CSection2 extends React.Component{
//   state = {

//     categorys: [],
//     isLoading: true,
//     errors: null,

//   }


//   async getCategory(){
//     await axios.get('http://192.168.100.181:8002/api/category')
//   .then(response =>
//     console.log(response) 
//     //response.data.result.map(category => 
//     // ({
//     //   category: category
//     // })    
//   )
//   .then(categorys =>{
//     this.setState({
//       categorys,
//       isLoading:false
//     });
//   })
//   .catch(error => this.setState({ error, isLoading: false }));
    
// }
//   componentDidMount(){
//     this.getCategory();
//   }
    render(){
      // const { isLoading, categorys } = this.state;
        return(
            <div>
                 {/* {!isLoading ? categorys.map(category=>{
                   return(
                   <div>{category}</div>
                   )
                 }): 
                 (<p>Loading ...</p>)}
 */}





                 <section className="can-proile-page">
  <div className="container">
  <div className="text-center" style={{paddingBottom: "118px"}}>
  <h2>Hala Talent</h2>
      <p>The leading website where you can find the best talents from all across the MENA</p>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-10"></div>
          <div className="col-lg-2">
            {/* <a href="edit_candidate_profile.html" className="btn btn-danger" style={{float: "right"}}>Edit</a> */}
            <NavLink to="/edit_candidate_profile" className="btn btn-danger" style={{float: "right"}}>Edit</NavLink>
          </div>
        </div>
      </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
        <div className="col-lg-4">
            <div className="profile-side">
              <img src={Candidate1} alt="" />
              <h4>Wanda Montgomery</h4>
              <h5>Medical Professed</h5>
              <h5>Sector: Restaurant</h5>
              <h5>Salary: $13,000.00 / Monthly</h5>
              <p>(Age: 60 years)</p>
              <p>Ada Street, London, United Kingdom</p>
              <span>Member Since, December 4, 2017</span>
              <ul>
                <li className="face"><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                <li className="twitt"><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li className="link"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                <li className="dribb"><a href="#"><i className="fa fa-dribbble"></i></a></li>
              </ul>
            </div>
            <div className="profile-view">
              <p style={{float: "left", color: "black", fontWeight: "600"}}>Profile Views</p>
              <span style={{paddingLeft: "170px", fontWeight: "600"}}>10</span>
            </div>
            <div className="profile-d">
              <ul>
                <li><a href="#">Download Cv</a></li>
                {/* <!-- <li><a href="#">Save Candidate</a></li> --> */}
              </ul>
              <div className="profile-w">
                <a href="#"><i className="fa fa-whatsapp"></i>Whatsapp</a>
              </div>
            </div>
            <div className="place-pic">
              <img src={promoplace2} alt="" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="profile-r">
                      <i className="fa fa-user"></i>
                      <h4>Academic Level</h4>
                      <p>Associate</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="profile-r">
                      <i className="fa fa-user"></i>
                      <h4>Age</h4>
                      <p>18- 22 Year</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="profile-r">
                      <i className="fa fa-user"></i>
                      <h4>Salary</h4>
                      <p>1850</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="profile-r">
                      <i className="fa fa-user"></i>
                      <h4>Gender</h4>
                      <p>Female</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="profile-r">
                      <i className="fa fa-user"></i>
                      <h4>Industry</h4>
                      <p>Restaurant</p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="place-pic">
                        <img src={promoplaced} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="profile-r-p">
                      <h4>Description</h4>
                      <p>Hello my name is Ariana Gande Connor and I’m a Financial Supervisor from Netherlands, Rotterdam. In pharetra orci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam ante accumsan ac est.</p>
                      <p>Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris nec</p>
                    </div>
                  </div>
                   <div className="col-lg-12">
                    <div className="place-pic">
                        <img src={promoplacee} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="ph4">
                      <h4>Education</h4>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="profile-education">
                      <span>Walters University</span>
                      <h4>Masters in Fine Arts</h4>
                      <p>Fussy penguin insect additionally wow absolutely crud meretriciously hastily<br />
                       dalmatian a glowered. outside oh arrogantly vehement.</p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="profile-education">
                      <span>Glibe University</span>
                      <h4>Tommers College</h4>
                      <p>Fussy penguin insect additionally wow absolutely crud meretriciously hastily<br />
                       dalmatian a glowered. outside oh arrogantly vehement.</p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="profile-education">
                      <span>Miles College</span>
                      <h4>Diploma in Fine Arts</h4>
                      <p>Fussy penguin insect additionally wow absolutely crud meretriciously hastily<br />
                       dalmatian a glowered. outside oh arrogantly vehement.</p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="place-pic">
                        <img src={promoplaceex} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="ph4">
                      <h4>Experience</h4>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="profile-education">
                      <span>Atract Solutions</span>
                      <h4>Development Manager</h4>
                      <p>Fussy penguin insect additionally wow absolutely crud meretriciously hastily<br />
                       dalmatian a glowered. outside oh arrogantly vehement.</p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="profile-education">
                      <span>Barde Workers</span>
                      <h4>Senior Php Developer</h4>
                      <p>Fussy penguin insect additionally wow absolutely crud meretriciously hastily<br />
                       dalmatian a glowered. outside oh arrogantly vehement.</p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="profile-education">
                      <span>Miles College</span>
                      <h4>Self Employed Professional</h4>
                      <p>Fussy penguin insect additionally wow absolutely crud meretriciously hastily<br />
                       dalmatian a glowered. outside oh arrogantly vehement.</p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="place-pic">
                        <img src={promoplaceexp} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="ph4 mt-5">
                      <h4>Expertise</h4>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="profile-expertise">
                      <p>Sale Product</p>
                    </div>
                    <div className="profile-exp-bar"></div>
                    <div className="profile-expertise">
                      <p>Listening</p>
                    </div>
                    <div className="profile-exp-bar" style={{width: "80%"}}></div>
                     <div className="profile-expertise">
                      <p>Business Sense</p>
                    </div>
                    <div className="profile-exp-bar" style={{width: "70%"}}></div>

                  </div>
                  <div className="col-lg-6">
                     <div className="profile-expertise">
                      <p>Google Seo</p>
                    </div>
                    <div className="profile-exp-bar" style={{width: "85%"}}></div>
                    <div className="profile-expertise">
                      <p>Graphic Design</p>
                    </div>
                    <div className="profile-exp-bar" style={{width: "95%"}}></div>
                     <div className="profile-expertise">
                      <p>Organizations</p>
                    </div>
                    <div className="profile-exp-bar" style={{width: "40%"}}></div>
                  </div>
                  <div className="col-lg-12">
                    <div className="place-pic">
                        <img src={promoplacep} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="profile-port">
                          <img src={port1} alt="Avatar" className="image-port" />
                        <div className="overlay">
                          <div className="text"><i className="fa fa-chain fa-lg"></i></div>
                        </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="profile-port">
                          <img src={port2} alt="Avatar" className="image-port" />
                        <div className="overlay">
                          <div className="text"><i className="fa fa-chain fa-lg"></i></div>
                        </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="profile-port">
                          <img src={port3} alt="Avatar" className="image-port" />
                        <div className="overlay">
                          <div className="text"><i className="fa fa-chain fa-lg"></i></div>
                        </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="profile-port">
                          <img src={port1} alt="Avatar" className="image-port" />
                        <div className="overlay">
                          <div className="text"><i className="fa fa-chain fa-lg"></i></div>
                        </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="profile-port">
                          <img src={port2} alt="Avatar" className="image-port" />
                        <div className="overlay">
                          <div className="text"><i className="fa fa-chain fa-lg"></i></div>
                        </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="profile-port">
                          <img src={port3} alt="Avatar" className="image-port" />
                        <div className="overlay">
                          <div className="text"><i className="fa fa-chain fa-lg"></i></div>
                        </div>
                        </div>
                      </div>
                       <div className="col-lg-12">
                    <div className="place-pic">
                        <img src={promovideo} alt="" />
                    </div>
                  </div>
                      <div className="col-lg-12">
                    <div className="pvideo mt-5">
                      <iframe width="100%" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                      </iframe>
                    </div>
                  </div>
                      <div className="col-lg-12">
                    <div className="place-pic">
                        <img src={promohonor} alt="" />
                    </div>
                  </div>
                    </div>
                  </div>
                
                  <div className="col-lg-12">
                    <div className="ph4">
                      <h4>HONORS & AWARDS</h4>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="profile-education">
                      {/* <!-- <span>Atract Solutions</span> --> */}
                      <h4>Distinguished Service Award</h4>
                      <p>Fussy penguin insect additionally wow absolutely crud meretriciously hastily<br />
                       dalmatian a glowered. outside oh arrogantly vehement.</p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="profile-education">
                      {/* <!-- <span>Barde Workers</span> --> */}
                      <h4>Robin Milner Young Researcher Award</h4>
                      <p>Fussy penguin insect additionally wow absolutely crud meretriciously hastily<br />
                       dalmatian a glowered. outside oh arrogantly vehement.</p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="profile-education">
                      {/* <!-- <span>Miles College</span> --> */}
                      <h4>Doctoral Dissertation Award</h4>
                      <p>Fussy penguin insect additionally wow absolutely crud meretriciously hastily<br />
                       dalmatian a glowered. outside oh arrogantly vehement.</p>
                    </div>
                </div>
                 <div className="col-lg-12">
                    <div className="place-pic">
                        <img src={promoover} alt="" />
                    </div>
                  </div>
                    <div className="col-lg-6">
                      <div className="col-lg-12">
                        <div className="row mt-5">
                          <div className="col-lg-6">
                            <div className="profile-rating">
                          <p>Education</p>
                        </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="rstar">
                            <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="profile-rating">
                          <p>Skills</p>
                        </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="rstar">
                            <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="profile-rating">
                          <p>Communication</p>
                        </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="rstar">
                            <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="rating-r">
                        <p>Overall Rating</p>
                        <h4>5.0</h4>
                         <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="com-inp">
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Email Address" />
                        <textarea name="" id="" cols="30" rows="10">Message</textarea>
                        <button type="submit" className="btn btn-primary mt-4">Submit Now</button>
                      </div>
                    </div>
              </div>
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

export default CSection2;