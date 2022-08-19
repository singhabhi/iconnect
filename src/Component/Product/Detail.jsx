import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productdata } from './Data';
import './product.css';

export const Detail = () => {

  function addToCart() {
  
      let arr=JSON.parse(localStorage.getItem('cart')) || [];
      arr.push(data);
      localStorage.setItem('cart',JSON.stringify(arr));
    
    alert("Item Added to Cart")
  }
  
  const [data,savedata]= useState(null);
  
  const {id}= useParams();
 

  useEffect(()=>{
    if(id)
    {
       const data = productdata.find((i)=> i.id==id)

     
      if(data){
          savedata(data);
      }
      console.log("abhi",data);
    }
  },[])

 
  
  return (
   <>
    
     {data?(
      <div className='container'>
       <div className="row">
         <div className="col">
           <div className='mt-5'>
             <div className="row">
               <div className="col-md-6 col-xl-3">
                  <div className="detailimg">
                    <img src={data.image} alt="" />
                  </div>
               </div>
               <div className="col-md-6 col-xl-4">
                  <div className='mt-5'>
                    <h4 className='fw-bold'>{data.title}</h4>
                    <p className='fw-bold'>Price: ${data.price}</p>
                    <p>{data.description}</p>
                  </div>
                  <div className='detailbtn mt-2'>
                     <button type="button" class="btn btn-primary btn-bg-clr" onClick={addToCart} >Add To Card</button>
                  </div>
               </div>
               
             </div>
           </div>
         </div>
       </div>
     </div>):'loading'}
     {}
   </>
  );
}
