import React from 'react'
import {BrowserRouter,  Route, Routes } from 'react-router-dom';

import { Detail } from '../Product/Detail';
// import { Home } from '../Product/Home';
import { ProductPage } from '../Product/ProductPage';
import { CartPage } from '../Product/CartPage';

export const Rout = () => {
  return (
    <>
 <main>
         
          <Routes>
            <Route path="/" element={<ProductPage/>}  />
              <Route path="/detail/:id" element={<Detail/>}  />
              <Route path="/Cart" element={<CartPage/>}  />
          </Routes>  
            
    </main>
    </>
  )
}
