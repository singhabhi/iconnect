import React from 'react'

export const Cart = (props) => {
  
    // console.log("mayank",data);
    function remove()
    {
        let data=JSON.parse(localStorage.getItem('cart'));
        console.log(props.ind);
        data.splice(props.ind,1);
        localStorage.setItem('cart',JSON.stringify(data));
        window.location.reload();
      
    }

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
                            <button type="button" class="btn btn-primary" onClick={remove}>Remove</button>
                          </div>
                        </div>
                    </div>           
    
    </>
  )
}
