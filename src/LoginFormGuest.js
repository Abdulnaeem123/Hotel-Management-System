import { NavLink } from "react-router-dom"

import React, { Component } from 'react'

export default class LoginFormGuest extends Component {

 
  render() {
    return(
      <>
      <div className="container">
      <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <div className="IntroSection mt-5 ">
    <h1>Sign Up</h1>
         </div>
         <form>
<div class="form-group mt-3">
  <label for="exampleInputEmail1">First Name</label>
  <input type="text"
  name=""  onChange={InputEvent}
  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Frst Name"/>

</div>
<div class="form-group mt-3">
  <label for="exampleInputEmail1">Last Name</label>
  <input type="text"
   name=""  onChange={InputEvent}
  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Last Name"/>

</div>
<div class="form-group mt-3">
  <label for="exampleInputEmail1">Address</label>
  <input type="text" 
   name=""  onChange={InputEvent}
  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Address"/>

</div>
<div class="form-group mt-3">
  <label for="exampleInputEmail1">Contact number</label>
  <input type="number" 
   name=""  onChange={InputEvent}
  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Contact number"/>

</div>
<div class="form-group mt-3">
  <label for="exampleInputEmail1">City</label>
  <input type="text"
   name=""  onChange={InputEvent}
  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City"/>

</div>
<div class="form-group mt-3">
  <label for="exampleInputEmail1">State</label>
  <input type="text"
   name=""  onChange={InputEvent}
  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="State"/>

</div>
<button type="submit" class="btn btn-outline-primary mt-3">Login</button>
<NavLink className="mx-5" to="#">Already a User?</NavLink>
</form>

          </div>
      </div>
  </div>
      </>
  );
  }
}
