import React, { useEffect, useState } from 'react'
import { ProductBox } from './ProductBox';
import { productdata } from './Data';



export const ProductPage = () => {
  // const [data , setdata] = useState([]);

  // const getData = async () =>{
  //   const response= await fetch('https://api.escuelajs.co/api/v1/products');
  //   setdata(await response.json());
  // }
  // useEffect(() =>{
  //   getData();
  // }, [] );
  // console.log(data);


  return (
    <div className='container'>
      <div className='row'>
        <div className="col-12">
          <div className='text-center mt-5 fw-bold'>
            <h2 className='fw-bold'>PRODUCTS</h2>
          </div>
        </div>
      </div>
     <div className="row">
        <div className="col">
            <div className="">
                <div className="row">
                
                    {
                      productdata.map((d) => {
                        
                         return(
                          <ProductBox
                            id={d.id}
                            img={d.image}
                            price={d.price}
                            name={d.title}
                          />
                         )
                        
                      })
                    }
                   
                </div>
            </div>
        </div>
     </div>
    </div>
  );
}
