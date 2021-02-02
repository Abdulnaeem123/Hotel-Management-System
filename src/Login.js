import React, { Component } from 'react'
const Login=()=>{
return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            <div className="IntroSection mt-5 ">
      <h1>Login</h1>
           </div>
           <form>
  <div class="form-group mt-3">
    <label for="exampleInputEmail1">Username</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group mt-3">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder=" Enter Password"/>
  </div>
 
  <button type="submit" class="btn btn-primary mt-3">Login</button>
</form>
            </div>
        </div>
    </div>
    </>
)
}
export default Login