import React from "react";
import { Routes , Route } from "react-router-dom";
// import Footer from "./Footer";
import Footer from "./Footer"
import Moisturizer from "./Moisturizer";
import { MoisturProduct } from "./MoisturProduct";



export const Allroutes =()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<></>}/>
                <Route path="/products" element={<Moisturizer/>}/>
                <Route path="/products/:id" element={<MoisturProduct/>}/>
            </Routes>
        </div>
    )
}