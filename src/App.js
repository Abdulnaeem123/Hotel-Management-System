import React, { Component } from 'react'
import {Switch,Route }from 'react-router-dom'
import Home from './Home'
import Booking from './Booking'
import Services from './Services'
import Login from './Login'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Navbar'
import "./Styling.css"

const App=()=>{
    return (
<>
<Navbar/>
<Switch>
<Route exact path="/" component={Home}/>
<Route exact  path="/Booking" component={Booking}/>
<Route exact path="/Services" component={Services}/>
<Route exact path="/Login" component={Login}/>
<Redirect to="/"/>
</Switch>

</>

    )
}
export default App