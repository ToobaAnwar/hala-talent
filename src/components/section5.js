import React from 'react'

class Section5 extends React.Component{
    render(){
        return(
            <div>
                <section className="text-center my-5 p-1">

{/* <!-- Section heading --> */}
<h2 className="h1-responsive font-weight-bold my-5 animated bounce">What Our Client Says</h2>
{/* <!-- Section description --> */}
<p className="dark-grey-text w-responsive mx-auto mb-5 animated bounce">Our high priority is to satisfy our clients at any cost, what are their views about us, have a look:
</p>

<div className="container-fluid">
  {/* <!-- Grid row --> */}
<div className="row">

  {/* <!--Grid column--> */}
  <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
    {/* <!--Card--> */}
    <div className="card testimonial-card animated bounceInRight">
      {/* <!--Background color--> */}
      {/* <!-- <div className="card-up info-color" style="background-color: #33b5e5 !important;"></div> --> */}
       <div className="card-up blue-gradient">
      </div>
      {/* <!--Avatar--> */}
      <div className="avatar mx-auto white">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" className="rounded-circle img-fluid" />
      </div>
      <div className="card-body">
        {/* <!--Name--> */}
        <h4 className="font-weight-bold mb-4">John Doe</h4>
        <hr />
        {/* <!--Quotation--> */}
        <p className="dark-grey-text mt-4"><i className="fa fa-quote-left pr-2"></i>It was a nice experience with HALA Talents</p>
      </div>
    </div>
    {/* <!--Card--> */}
  </div>
  {/* <!--Grid column--> */}

  {/* <!--Grid column--> */}
  <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
    {/* <!--Card--> */}
    <div className="card testimonial-card animated bounceInRight">
      {/* <!--Background color--> */}
      <div className="card-up blue-gradient">
      </div>
      {/* <!--Avatar--> */}
      <div className="avatar mx-auto white">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="rounded-circle img-fluid" />
      </div>
      <div className="card-body">
        {/* <!--Name--> */}
        <h4 className="font-weight-bold mb-4">Anna Aston</h4>
        <hr />
        {/* <!--Quotation--> */}
        <p className="dark-grey-text mt-4"><i className="fa fa-quote-left pr-2"></i>Hala Talent is a complete tool for hiring a valuable candidate.</p>
      </div>
    </div>
    {/* <!--Card--> */}
  </div>
  {/* <!--Grid column--> */}

  {/* <!--Grid column--> */}
  <div className="col-lg-4 col-md-6">
    {/* <!--Card--> */}
    <div className="card testimonial-card animated bounceInRight">
      {/* <!--Background color--> */}
      {/* <!-- <div className="card-up indigo"></div> --> */}
       <div className="card-up blue-gradient">
      </div>
      {/* <!--Avatar--> */}
      <div className="avatar mx-auto white">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle img-fluid" />
      </div>
      <div className="card-body">
        {/* <!--Name--> */}
        <h4 className="font-weight-bold mb-4">Maria Kate</h4>
        <hr />
        {/* <!--Quotation--> */}
        <p className="dark-grey-text mt-4"><i className="fa fa-quote-left pr-2"></i>Hala Talents provide a complete resource of candidate.</p>
      </div>
    </div>
    {/* <!--Card--> */}
  </div>
  {/* <!--Grid column--> */}

</div>
{/* <!-- Grid row --> */}
</div>

</section>



            </div>
        )
    }
}

export default Section5;