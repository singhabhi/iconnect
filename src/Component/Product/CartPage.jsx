import React from 'react'
import { Cart } from './Cart';

export const CartPage = () => {
    let data=JSON.parse(localStorage.getItem('cart')) || [];
  return (
     <>
        <div className='container'>
          <div className="row">
            <div className="col-12">
                <div className="">
                    <div className="row">
                    {
                      data.map((d,index) => {
                         return(
                          <Cart
                            id={d.id}
                            img={d.image}
                            price={d.price}
                            name={d.title}
                            ind={index}
                          />
                         )
                        
                      })
                    }
                    </div>
                </div>
            </div>
          </div>
        </div>
     </>
  )
}
