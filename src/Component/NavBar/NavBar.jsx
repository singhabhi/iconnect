import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
       
          <div className="container-fluid navBaar shadow-sm   bg-white  ">
           <div className="">
               <div className="row">
                    <div className="col-12">
                    <div className="py-4">
                       <div className="container">
                          <div className="row">
                                <div className="col-md-4 col-6">
                                    <div className="">
                                        <h2 className='fw-bold'>Shoping Mall</h2>
                                    </div>
                                </div>
                                <div className='col-md-6 col-6'>
                                  <div className="mt-2 carttext">
                                    <p><Link to="/cart">Cart</Link></p>
                                  </div>
                                </div>
                            </div>
                       </div>
                    </div>
                    </div>
                </div>
           </div>      
          </div>
      
    </>
  )
}
