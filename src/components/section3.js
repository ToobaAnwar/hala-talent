import React from 'react'
import finance from '../img/finance.png'
import auto from "../img/auto.png"
import bussiness from "../img/bussiness.png" 
import pencil from "../img/pencil.png" 
import health from  "../img/health.png"
import resturent from "../img/resturent.png" 
import global from "../img/global.png"
import telecom from '../img/telecom.png'


class Section3 extends React.Component{
    render(){
        return(
            <div className='App'>
                 <section className="category">
    <div className="container-fluid">
 {/* <!--    <div className="text-center">
      <h2 className="animated bounce">HalaTalents</h2>
    </div> --> */}
    <div className="cate-bg">
      <div className="container">
        <div className="text-center" style={{paddingTop: '40px'}}>
          <h2 className="animated swing" style={{color: "white"}}>Browse By Category</h2>
          <p className="animated swing" style={{color: "white"}}>Recruitment made easy with HALA TALENTS, linking Talents-Employers, for effective and beneficial  hiring
</p>
        </div>
        <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-3">
              <div className="one-four animated fadeInLeft" data-toggle="modal" data-target="#myModal">
                <div className="cate-in">
                  <img src={finance} alt="finance" />
                  <h2>Acounting & Finance</h2>
                  <p>3 Candidates</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <a href="signup.html" style={{textDecoration: "none"}}>
                <div className="one-four animated fadeInLeft">
                <div className="cate-in" >
                  <img src={auto} alt="finance" />
                  <h2>Automotive Jobs</h2>
                  <p>2 Candidates</p>
                </div>
              </div>
              </a>
            </div>
            <div className="col-lg-3">
              <div className="one-four animated fadeInLeft" style={{paddingBottom: "7px"}}>
                <div className="cate-in">
                  <img src={bussiness} alt="finance" />
                  <h2>Bussiness</h2>
                  <p>4 Candidates</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="one-four animated fadeInLeft">
                <div className="cate-in">
                  <img src={pencil} alt="finance" />
                  <h2>Education Training</h2>
                  <p>4 Candidates</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="one-four  animated fadeInRight">
                <div className="cate-in">
                  <img src={health} alt="finance" />
                  <h2>Healthcare</h2>
                  <p>6 Candidates</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="one-four  animated fadeInRight">
                <div className="cate-in">
                  <img src={resturent} alt="finance" />
                  <h2>Restaurant Food</h2>
                  <p>3 Candidates</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="one-four  animated fadeInRight">
                <div className="cate-in">
                  <img src={global} alt="finance" />
                  <h2>Transportation</h2>
                  <p>1 Candidates</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="one-four  animated fadeInRight">
                <div className="cate-in">
                  <img src={telecom} alt="finance" />
                  <h2>Telecommunications</h2>
                  <p>7 Candidates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-center animated shake">
        <a href="login.html">See All</a>
      </div>
      </div>
    </div>
  </div>
  </section>
            
</div>
        )
    }
}

export default Section3;