import React from 'react'

class PerSection2 extends React.Component{

    render(){
        return(
            <div>
                 
    <div className="container">
        <form action="/action_page.php">
            <div className="form-group">
                <div className="question">                        
                    <p><button type="button" className="btn btn-primary" style={{backgroundColor: "#3395d2"}}>Question 1</button></p>
                    <h5><label for="email">Learning how to drive a car safely comes from a person’s ability to receive _________ training
                    and having enough time behind the wheel to _________ their skills.</label>
                    </h5>
                    <div className="checkbox">
                        <h6><label><input type="radio" name="q1" />  consistent … forget</label></h6>
                    </div>
                    <div className="checkbox">
                        <h6><label><input type="radio" name="q1" />  adequate … hone</label></h6>
                    </div>
                    <div className="checkbox ">
                        <h6><label><input type="radio" name="q1" />  temporary … manage</label></h6>
                    </div>
                    <div className="checkbox ">
                        <h6><label><input type="radio" name="q1" />  careful … belie</label></h6>
                    </div>
                    <div className="checkbox ">
                        <h6><label><input type="radio" name="q1" />  generous … incur</label></h6>
                    </div>
                    <hr />
                 </div>

                 <div className="question">                        
                    <p><button type="button" className="btn btn-primary" style={{backgroundColor: "#3395d2"}}>Question 2</button></p>
                    <h5><label for="email">Are the following two words similar, contradictory, or not related?</label>
                    </h5>
                    <span>Optional … Observational</span><br /><br />
                    <div className="checkbox">
                        <h6><label><input type="radio" name="q2" />  Contradictory</label></h6>
                    </div>
                    <div className="checkbox">
                        <h6><label><input type="radio" name="q2" />  Not related</label></h6>
                    </div>
                    <div className="checkbox "> 
                        <h6><label><input type="radio" name="q2" />Similar</label></h6>
                    </div>
                    
                    <hr />
                </div>

                <div className="question">                        
                    <p><button type="button" className="btn btn-primary" style={{backgroundColor: "#3395d2"}}>Question 3</button></p>
                    <h5><label for="email">Mike is 11 years old. Jim is twice as old as Mike. When Jim is 50 years old, how old will Mike be?</label>
                    </h5>
                    <div className="checkbox">
                        <h6><label><input type="radio" name="q3" />  61</label></h6>
                    </div>
                    <div className="checkbox">
                        <h6><label><input type="radio"  name="q3" />  39</label></h6>
                    </div>
                    <div className="checkbox ">
                        <h6><label><input type="radio"  name="q3" />  25</label></h6>
                    </div>
                    <div className="checkbox ">
                        <h6><label><input type="radio"  name="q3" />  44</label></h6>
                    </div>
                    <div className="checkbox ">
                        <h6><label><input type="radio"  name="q3" />  36</label></h6>
                    </div>
                    <hr />
                </div>

                <div className="question">                        
                    <p><button type="button" className="btn btn-primary" style={{backgroundColor: "#3395d2"}}>Question 4</button></p>
                    <h5><label for="email">If the first two statements are true, is the third statement true?</label>
                    </h5>
                    <span>All players on the Acme softball team must wear a blue uniform.</span><br />
                    <span>Mike used to play on the Acme softball team.</span><br /><br />
                    <span>Mike wears a blue uniform.</span><br />
                    <div className="checkbox">
                        <h6><label><input type="radio" name="q4" />  Yes</label></h6>
                    </div>
                    <div className="checkbox">
                        <h6><label><input type="radio" name="q4" />  No</label></h6>
                    </div>
                    <div className="checkbox ">
                        <h6><label><input type="radio" name="q4" />  Uncertain</label></h6>
                    </div>
                    <hr />
                </div>

                <div className="question">                        
                    <p><button type="button" className="btn btn-primary" style={{backgroundColor: "#3395d2"}}>Question 5</button></p>
                    <h5><label for="email">______ is to FISH as CHEESE is to MOUSE.</label>
                    </h5>
                    <div className="checkbox">
                        <h6><label><input type="radio" name="q5" />  WORM</label></h6>
                    </div>
                    <div className="checkbox">
                        <h6><label><input type="radio" name="q5" />  WATER</label></h6>
                    </div>
                    <div className="checkbox ">
                        <h6><label><input type="radio" name="q5" />  BOAT</label></h6>
                    </div>
                    <div className="checkbox ">
                        <h6><label><input type="radio" name="q5" />  SEAWEED</label></h6>
                    </div>
                    <div className="checkbox ">
                        <h6><label><input type="radio" name="q5" />  FISHERMEN</label></h6>
                    </div>
                    <hr />
                </div>
            </div>
            <center><button type="button" className="btn btn-primary mt-5"  data-toggle="modal" data-target="#myModal">Submit</button></center>
         </form>
    </div>
    <div className="container">
  {/* <!-- <h2>Modal Example</h2> -->
  <!-- Button to Open the Modal -->
  <!-- <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Open modal
  </button> --> */}

  {/* <!-- The Modal --> */}
  <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div className="modal-header">
          <h4 className="modal-title">HalaTalent</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div className="modal-body">
            Personality Submited...
        </div>
        
        {/* <!-- Modal footer --> */}
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" data-dismiss="modal">Next</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div>              
            </div>
        )
    }
}

export default PerSection2;