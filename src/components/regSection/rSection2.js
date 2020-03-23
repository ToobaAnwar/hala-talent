import React from 'react'
import { NavLink } from 'react-router-dom';

class RSection2 extends React.Component{
  state = {
    numChildren: 0,
    userid: '',
    role: '',
    candid: '',
    phoneno: '',
    category: '',
    Sub_category: '',
    file:'',
    video: '',
    school: '',
    subject: '',
    qualification: '',
    result: '',
    gradyear: '',
  }

  enableButton =()=> {

  }

  render () {
    const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<Childform key={i} number={i} />);
    };

    return (
      <ParentForm addChild={this.onAddChild} data={this.state}>
        {children}
      </ParentForm>
    );
  }

  onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  }
}

const ParentForm = (props) => {  
  //  const {userid,
  //  role,
  // //  candid,
  // //  phoneno,
  // //  category,
  // //  Sub_category,
  // //  file,
  // //  video,
  // //  school,
  // //  subject,
  // //  qualification,
  // //  result,
  // //  gradyear
  // } = props;
  // const isEnabled = userid !== undefined && role !== undefined ;
                    // props.userid.length > 0 && props.role.length > 0 && props.candid.length > 0 && 
                    // props.phoneno.length > 10 && props.category.length !== null && 
                    // props.Sub_category.length !== null && props.file.length !== null && 
                    // props.school.length > 0 && props.subject.length > 0 && props.qualification.length > 0 && 
                    // props.result.length > 0 && props.gradyear.length > 0;
        return(
            <div>
                
<section>
  <div className="container">
    <div className="text-center">
      <h2>Register Form</h2>
      <p>Register now and become the part of outstanding talents pool across the MENA</p>
    </div>
    <form  method="POST">
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
                <input type="text" name={props.userid}  placeholder="User ID" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="text" name={props.role}  placeholder="Role" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="text" name={props.candid} placeholder="Candidate ID" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
               <input type="number" name={props.phoneno}  placeholder="Phone Number" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <select name={props.category} value='category'  id="" required >
                  <option value="">Select Category</option>
                  <option value="">Softwere & IT Development</option>
                  <option value="">Agriculture</option>
                  <option value="">Acountant</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <select name={props.Sub_category}  id="" required >
                  <option value="">Sub Category</option>
                  <option value="">Softwere & IT Development</option>
                  <option value="">Agriculture</option>
                  <option value="">Acountant</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group mt-4 pl-2 pb-2 pt-2" style={{border: '1px solid lightgrey', borderRadius: '3px'}}>
                <label for="exampleFormControlFile1">Resume PDF or Docx.</label>
                <input type="file" name={props.file}  className="form-control-file" id="exampleFormControlFile1" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group mt-4 pl-2 pb-2 pt-2" style={{border: '1px solid lightgrey', borderRadius: '3px'}}>
                <label for="exampleFormControlFile1">Profile Video</label>
                <input type="file" name={props.file}  className="form-control-file" id="exampleFormControlFile1" required />
              </div>
            </div>
            <div className="col-lg-12">
             <div className="edit-area">
               <textarea name={props.video} placeholder="Video Description" required></textarea>
             </div>
            </div>
            <div className="col-lg-12 mt-3">
              <h4 style={{fontWeight: "600"}}>Qualification</h4>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="text" name={props.school} placeholder="school" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="text" name={props.subject}  placeholder="Subject" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="text" name={props.qualification} placeholder="Qualification Level" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="text" name={props.result} placeholder="Result" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="number1" name={props.gradyear} placeholder="Graduation Year" required />
              </div>
            </div>
            <div className="col-lg-6 mt-5">
              <button className="btn btn-primary" type="submit" 
              style={{width: "100%", height: "40px"}}
              // disabled={!isEnabled}
              onClick={props.addChild}
              >
                Add Another Qualification</button>
            </div>
            <div className="col-lg-12 mt-3">
              {props.children}
            </div>
            <div className="col-lg-12">
              <h4 style={{fontWeight: "600"}} className="mt-4">Salary</h4>
              <div className="lf">
                <input type="number" maxlength="11" placeholder="Expected Salary" required />  
              </div>
            </div>
            <div className="col-lg-12">
              <h4 style={{fontWeight: "600"}} className="mt-4">Skills</h4>
              <div className="lf">
                <input type="text"  placeholder="Skills" required />
              </div>
            </div>
            <div className="col-lg-12">
              <h4 style={{fontWeight: "600"}} className="mt-4">Subscription info</h4>
              <div className="lf">
                <input type="text"  placeholder="Subscription info" required />
              </div>
            </div>
            <div className="col-lg-12 mt-3">
              <h4 style={{fontWeight: "600"}}>Experience</h4>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="text" placeholder="Title" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="text" placeholder="Employment Type" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="text" placeholder="Company Name" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="text" placeholder="Location" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="date" placeholder="From" required /> 
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="date" placeholder="To" required />
              </div>
            </div>
            <div className="col-lg-12 mt-5">
              <button className="btn btn-primary" type="submit" style={{width: "100%", height: "40px"}}>Add</button>
            </div>
            <div className="col-lg-12">
              <div className="lf">
                <NavLink to='/personality' type="submit" className="btn btn-primary">Submit</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</section>

            </div>
        )
    
}
const Childform = (props) => {
  return(
    <div>
              <h4 style={{fontWeight: "600"}}>Qualification</h4>
            
            <div className="col-lg-6">
              <div className="lf">
                <input type="text" placeholder="school" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="text" placeholder="Subject" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="text" placeholder="Qualification Level" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="text" placeholder="Result" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lf">
                <input type="number1" placeholder="Graduation Year" required />
              </div>
            </div>
            <div className="col-lg-6 mt-5">
              <button className="btn btn-primary" type="submit" style={{width: "100%", height: "40px"}}>Add Another Qualification</button>
    </div></div>
  )
} 

export default RSection2;