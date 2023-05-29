import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Aboutus } from '../pages/Aboutus';
import Home from '../pages/Home';
import { Contactus } from '../pages/Contactus';
import { Feature } from '../pages/Feature';
import Industry from '../pages/Industry';

export const Allroutes = () => {
  return (
      <>
        <Routes>
            
        <Route exact  path="/" element={<Aboutus />}></Route>
        <Route exact  path="/Home" element={<Home />}></Route>
        <Route exact  path="/Contactus" element={<Contactus />}></Route>
        <Route exact path="/Feature" element={<Feature />}></Route>
        <Route exact path="/Industry" element={<Industry />}></Route>

        </Routes>

      </>
  )
}
