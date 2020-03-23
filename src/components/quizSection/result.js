// import React from "react";
// import {Link, NavLink, withRouter } from "react-router-dom";

// const Result = ({score }) => (
//   <div className="modal-dialog">
//      { score > 2 ?
//              <div>
//              <h4 className="modal-title">HalaTalents</h4><br />
//              <h5>You scored {score} / 5 correct answers!</h5><br />
//             <button type="button" className="btn btn-danger"><NavLink to='/regForm'> Register</NavLink></button>
//             </div>
//           :  <div>
//              <h4 className="modal-title">HalaTalents</h4><br />
//              <h5>You scored {score} / 5 correct answers!</h5><br />
//              <button type="button" className="btn btn-danger"><Link to='/quiz'>Try Again</Link></button>
//            </div>
//  } 
// </div>
// );

// export default withRouter( Result );

import React from 'react'
import { NavLink } from 'react-router-dom'
import QSection2 from './qSection2'

const Result = ({score}) => (
  <div>
    {
      score > 2 ? 
      <div>
        <h5>You Scored {score}/5 </h5>
        <NavLink to='/regForm'>Register Now</NavLink>
      </div>:
      <div>
        <h5>You scored {score}/5. You can't Register now</h5>
        <NavLink to='/quiz'>Try Again</NavLink>
      </div>
    }

  </div>
);

export default Result;