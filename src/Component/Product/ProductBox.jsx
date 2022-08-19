import React from 'react'
import './product.css';

import { useNavigate} from "react-router-dom";

export const ProductBox = (props) => {
  const navigate =useNavigate();
  function redirect(e){
    navigate('/detail/'+e);

  }
  // console.log(props);
  return (
    <>
                  <div className="col-lg-4 col-xl-3 col-md-6 ">
                        <div className='ProBox  py-4 mb-5 bg-body rounded text-center mt-5'>
                          <div className="imgsrc">
                            <img src={props.img} alt="" />
                          </div>
                          <div className="proName mt-2 ">
                            <p className='fw-bold'>{props.name}</p>
                            <p className='proPrice fw-bold'>{props.price}</p>
                          </div>
                          <div className="probtn">
                            <button type="button" class="btn btn-primary" onClick={()=>redirect(props.id)}>Know More</button>
                          
                          </div>
                        </div>
                    </div>
    </>
  )
}
