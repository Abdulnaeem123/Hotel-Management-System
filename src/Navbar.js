import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import  "./Styling.css"
const Navbar =()=>{

    return (
        <>
        <div className="container-fluid  navProject">
        <div className="row">
        <div className="col-10 mx-auto">

        <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Marudhar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" activeClassName="menu_active"  aria-current="page" to="./Home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" activeClassName="menu_ctive" aria-current="page" to="./Booking">Bookings</NavLink>
        </li>
     
        <li className="nav-item">
          <NavLink className="nav-link active" activeClassName="menu_active" aria-current="page" to="./Services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" activeClassName="menu_active" aria-current="page" to="./Login">Login</NavLink>
        </li>
     
       
     
       
         
       
      </ul>
     
    </div>
  </div>
</nav>
</div></div></div>
    </>
    )
}

export default Navbar