import React, { Component } from 'react';
import { footer } from '../config';
export default function Footer(){
    return(
        <footer className="footer_bottom" style={{backgroundColor:footer.backgroundcolor}}>
        <div className="page_width py-5">
           <div className="container text-center">
               <div className="footer_logo">
                   <img src={footer.logo} className="nav-logo mr-4"/>
               </div>
              <p  className="p_css3 footer_text m-0 py-3" style={{color:footer.paracolor,fontSize:footer.parafont}}>Copyright © Crypto Punkins 2021 All rights reserved. <br/>This project is not associated with any other project. </p>
             
           </div>
        </div>
     </footer> 
    )
}