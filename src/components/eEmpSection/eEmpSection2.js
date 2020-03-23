import React from 'react'

class EEmpProSection2 extends React.Component{
    render(){
        return(
            <div>
                

<form action="edit_candidate_profile.html">
    <div className="container">
        <div className="row">
            <div className="text-center">
                <h4 style={{fontWeight: "600"}}>Profile Detail</h4>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="lf">
                            <input type="text" placeholder="Company_Name" required />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="lf">
                            <input type="text" placeholder="Sector" required />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="lf">
                            <input type="text" placeholder="Location" required />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="lf">
                            <input type="text" placeholder="Founded Since" required />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="text-center mt-5">
                <h4 style={{fontWeight: "600"}}>Company Detail</h4>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="edit-area">
                            <textarea placeholder="Summry . . . " required ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
       <div className="row">
         <div className="col-lg-12 mt-5">
           <button type="submit" className="btn btn-primary">Save & Update</button>
         </div>
       </div>
    </div>
    
</form>
            </div>
        )
    }
}

export default EEmpProSection2;