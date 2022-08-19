import React from 'react'
import { ProductPage } from './Component/Product/ProductPage';
import { NavBar } from './Component/NavBar/NavBar';

import { Detail } from './Component/Product/Detail';
import { Rout } from './Component/Routing/Rout';


export const App = () => {
  return (
   <>
  
    <NavBar/>
    
    <Rout/>
    
   </>
  );
}
