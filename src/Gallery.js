import React ,{useContext}from 'react'
import {GalleryContext} from './GalleryContext'
const Galleries=()=>{ 
    const {galleries}=useContext(GalleryContext);
    
 return (
   <>
   <div className="IntroSection mt-5 ">
      <h1>Gallery</h1>
           </div>
           <div className="tz-gallery">
				<div className="row">
          { galleries.map((pics)=>{
            return(
              <div className="col-sm-12 col-md-4 col-lg-4 lightbox">
					
              <img className="img-fluid" src={pics.image} alt="Gallery Images"/>
            
          </div>
            );
            

          })
          

          }
          </div></div>
   </>
 );  
}
export default Galleries