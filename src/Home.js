import React, { Component } from 'react'
import Banner from "./Banner";
import Footer from './Footer';
import Galleries from './Gallery'
import GalleryContextProvider from './GalleryContext'

import Introduction from './Introduction'
const Home=()=>{
return (
    <>
   <Banner/>
   <Introduction/>
   <GalleryContextProvider>
       <Galleries/>
   </GalleryContextProvider>
   <Footer/>
    </>
)
}
export default Home