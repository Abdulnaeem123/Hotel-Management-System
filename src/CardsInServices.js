import React, { Component } from 'react'
import {NavLink } from 'react-router-dom'

const Cards=(props)=>{
    return (
        <>
        
        
    <div className="col-md-4  col-10 mx-auto mt-5">
              <div className="card" >
      <img className="card-img-top" src={props.imgsrc} alt="Card image cap"/>
      <div className="card-body">
        <h5 class="card-title font-weight-bold">{props.title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <NavLink to="#" class="btn btn-primary">Order Now</NavLink>
      </div>
    </div>
    </div>
               
        </>
    )
    }
    export default Cards