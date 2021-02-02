import React, { Component } from 'react'

import Cards from './CardsInServices';
import data from './DataofImages'
import  dataforRooms from './DataofRooms'
import CardsForRoom from './RoomsinServices'

import Footer from './Footer';
import BannerForServices from './BannerForServices';
const Services=()=>{
return (
    <>
    <BannerForServices/>
    <div className="IntroSection mt-5 ">
      <h1>Our Services</h1>
           </div>
           <div className="container-fluid mb-5">
           <div className="row">
           <div className=" col-10 mx-auto">
               <div className="row">
          
           {
               data.map((val,index)=>{
                 return <Cards imgsrc={val.imgsrc} title={val.title} key={index}/>
               })
           }

           </div>
          </div>
          </div>
          </div>


          <div className="IntroSection mt-5 ">
      <h1>Our Rooms</h1>
           </div>
           <div className="container-fluid mb-5">
           <div className="row">
           <div className=" col-10 mx-auto">
               <div className="row">
          
           {
               dataforRooms.map((val,index)=>{
                 return <CardsForRoom imgsrc={val.imgsrc} title={val.title} key={index}/>
               })
           }

           </div>
          </div>
          </div>
          </div>
             <Footer/>
    </>
)
}
export default Services