import React, {createContext,useState} from 'react'

import Room4 from './Images/Room4.jpg'
import Room5 from './Images/Room5.jpg'
import Room6 from './Images/Room6.jpg'
import Room1 from './Images/Room1.jpg'
import Room2 from './Images/Room2.jpg'
import Room3 from './Images/Room3.jpg'
import Gallery4 from './Images/Gallery4.jpg'
import Gallery5 from './Images/Gallery5.jpg'
import Gallery1 from './Images/Gallery1.jpg'
import Gallery2 from './Images/Gallery2.jpg'
import Gallery3 from './Images/Gallery3.jpg'
import Gallery6 from './Images/Gallery6.jpg'
export const GalleryContext=createContext();
 const GalleryContextProvider=(props)=>{
  const [galleries] = useState([
      {id:1,name:'galllery1',price:300,image:Gallery5},
      {id:2,name:'galllery2',price:200,image:Room4},
      {id:3,name:'galllery3',price:500,image:Gallery4},
      {id:4,name:'galllery4',price:700,image:Room5},
      {id:5,name:'galllery5',price:900,image:Gallery3},
      {id:6,name:'galllery6',price:900,image:Room6},
      {id:7,name:'galllery7',price:900,image:Gallery5},
      {id:8,name:'galllery8',price:900,image:Room1},
      {id:9,name:'galllery9',price:900,image:Gallery4}
  ]);
  
  return (
    <GalleryContext.Provider value={{galleries: [...galleries]}}>
    {props.children}
    </GalleryContext.Provider>
  );
}
export default GalleryContextProvider
