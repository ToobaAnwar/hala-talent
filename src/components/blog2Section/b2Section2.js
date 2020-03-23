import React from 'react'
import b1 from '../../img/blog-bg1.jpg'

class B2Section2 extends React.Component{
    render(){
        return(
            <div>

<section>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-4">
            <div className="emp-sidebar">
        <div className="emp-date">
          <h4>Categories</h4>
          <div className="date-txt">
            <ul>
            <li><input type="checkbox" /><a href="#">Career Advice</a></li>
            <li><input type="checkbox" /><a href="#">Interview Question</a></li>
            <li><input type="checkbox" /><a href="#">News</a></li>
            <li><input type="checkbox" /><a href="#">Productivity</a></li>
            <li><input type="checkbox" /><a href="#">Skills</a></li>
          </ul>
          </div>
        </div>
        <hr />  
        <div className="emp-date">
          <h4>Archives</h4>
          <div className="date-txt">
            <ul>
            <li><input type="checkbox" /><a href="#">October 2019</a></li>
            <li><input type="checkbox" /><a href="#">May 2019</a></li>
           
          </ul>
          </div>
        </div>
        <hr />  
        <div className="emp-date">
          <h4>Search</h4>
          <div className="date-txt">
            <p style={{fontSize: "14px"}}>Type and Press Enter to Search</p>
            <input type="text" placeholder="Search" style={{border:"1px solid lightgrey", borderRadius: "3px", paddingLeft: "10px", height: "40px", width: "100%"}} />
          </div>
        </div>
        
      </div>
          </div>
          <div className="col-lg-8">
            <div className="blog-detail">
              <img src={b1} width="100%;" alt="" />
              <div className="blog-d-txt">
                <h4>1.  Employers! Finding the Best Talent is Just one Click away!(for Employers)</h4>
                <p>Hala Talents is one of the best talents hunting portals with its unique way of fast recruitmentby using AI powered tool. Strange! Let me clear it for you, whenever talents want to make a profile, he/she must have to pass the technical quiz related to their specialties. If they pass out the quiz with 60% marks or more then he/she will be eligible for complete registration otherwise they will get a notification from the system to please try again later. Passing the quiz and filling up the mandatory fields in registration form, talent will be able to create his/her profile that will be visible to all the employers who have been registered on Hala Talents.</p>
               {/* <!--  <p>Job descriptions that are hastily-created and omit company and position details are a red flag.</p>
                <p>In a 2017 CareerBuilder Candidate Experience Study, surveying more than 5,000 job seekers, 82 percent of workers said knowing the company’s team structure and 
                    where they would fit was important to determine before applying.</p>
                <p>Job seekers are also interested in details such as salary, benefits, company strength, culture, and more. Just as you don’t want to be in a state of constant 
                hiring, they want to avoid a situation where they’ll be searching for work again in a few months because the job expectations weren’t made clear from the start.</p> --> */}
              </div>
              <div className="blog-d-txt">
                <h4>2. What Employer needs to do?</h4>
                <p>Simply employer register on our website with valid information like their name, company name, address, etc. After completing the account with subscription fee too, employers are eligible to see the profiles of talents, select the best talents to match your business or project need, take his/her interview and hire them.</p>
              {/* <!--   <p>Stringent qualifications that stretch into the job seeker’s distant past will also narrow the candidate pool. Demanding perfect SAT scores or unrealistic 
                  proficiencies sets you up for failure.</p>
                <p>On the other hand, if you advertise a job as “no experience necessary,” candidates will assume the company will only keep workers until they find a 
                    better-qualified applicant. Others may interpret the phrase to mean low pay, high stress, and little chance for advancement.</p> --> */}
              </div>
              <div className="blog-d-txt">
                <h4>3.Pay subscription Fee</h4>
                <p>An employer should pay our little subscription fee, which categorized by 2 packages. One is for monthly package and the second is for the yearly package and definitely, the employer will get a decent discount on our yearly subscription fee. Once you pay the fee then you will start finding the right talents for your business requirements</p>
                <p>By following these simple steps, you will reach the MENAtopmost talents who are eager to work with top employers across the MENA. So, what are you waiting for by paying a small subscription fee you will get approach of the MENAtop most talented freelancer list and hire one of them.</p>
                {/* <!-- <p>While money isn’t everything, it’s a top concern for job seekers considering multiple offers. Candidates are less likely to accept a job with low pay and
                     high demands or responsibility if they can find a position at equal or greater pay that requires less training and learning.</p>
                <p>On the other hand, many job seekers will accept a lower starting salary in exchange for added benefits such as networking opportunities, professional development 
                    courses, and more. These applicants are willing to take a leap of faith so long as they can be sure the time investment to learn new skills will benefit their 
                    professional goals.</p> --> */}
              </div>
              {/* <!-- <div className="blog-d-txt">
                <h4>4. Complete the Registration</h4>
                <p>Once you pass out the quiz with 60% or more than 60% marks then you shift to the registration process. In this process, you have added your resume, an introductory video (the basic reason for the introductory video is the employer check out the knowledge and the confidence level of talent) and the few more common things like qualification, experience, expected salary, etc. </p> -->
                <!-- <p>Excessive interviewing (both in duration and frequency) is a red flag for job seekers. They will get the impression that the employer is either indecisive or a perfectionist. Neither scenario is appealing.</p>
                <p>While it’s true that your work day is about more than hiring, job seekers crave frequent communication and status updates. If weeks pass without hearing from a potential employer, the candidate will assume you’re not interested and will move on to other opportunities.</p>
                <p>Finding the right candidate to fill your job vacancies is time-consuming. However, you can streamline the process by being transparent about both the company and the status of the position.</p>
                <p>In a “job seeker’s market,” you must show how your job vacancies benefit the job seeker, and provide them with the peace of mind that they’re not just a number. Strive to keep the hiring process to a realistic duration, and be sure to keep in regular contact with the job candidate so they know you want to hire them.</p>
                <p>What are your strategies to attract and retain qualified workers? Let us know in the comments!</p> -->
              <!-- </div> -->
              <!-- <div className="blog-d-txt">
                <h4>5. Talent Hunting</h4>
                <p>Now after complete the registration the employer time’s start. Your profile is listed in our talent section where all employers are already looking for the best talents to work with them. If an employer sees any spark in your profile he/she will definitely contact you to discuss more their project and hire you accordingly</p>
                <p>Here is the simple and unique way of Hala Talents to place your profile in front of UAE topmost employers without getting any stress and the most plus point is its absolutely free of cost for talents from registration to till the hiring.</p>
                <p>So, what are you waiting for, if you are in UAE and looking for work just register on our website now and be a part of UAE's best talent acquisition platform and get hired by employers?</p>
              </div> --> */}
              <div className="col-lg-12">
                <div className="blog-d-inp">
                  <input type="text" placeholder="Name" />
                </div>
                 <div className="blog-d-inp">
                  <input type="text" placeholder="Email" />
                </div>
                 <div className="blog-d-inp">
                  <input type="text" placeholder="Website" />
                </div>
                <div className="blog-d-inp">
                  <textarea name="" id="" cols="30" rows="10">Message</textarea>
                </div>
                <div className="blog-d-inp">
                  <button className="btn btn-primary">Submit</button>
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
export default B2Section2;