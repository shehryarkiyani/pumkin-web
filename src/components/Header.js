import React, { Component } from 'react';

import { header } from '../config';
export default function Header(){
    return(
        <section className=" navbar-section " style={{backgroundColor:header.backgroundcolor}}>
        <nav className="px-5 navbar navbar-expand-lg navbar-dark px-3 page_width mobile_padding_nav">
           <a className="logo-img " href="#section1"><img src={header.logo} className="nav-logo mr-4"/></a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav shadow mr-auto" style={{paddingTop:'8px'}}>
                 <li className="nav-item ">
                   <a className="nav-link" href="#section6" style={{color:header.txtcolor}}>Buy</a>
                 </li>
                 <li className="nav-item  ">
                   <a className="nav-link" href="#section4" style={{color:header.txtcolor}}>Roadmap</a>
                   
                 </li>
                 <li className="nav-item  ">
                   <a className="nav-link" href="#section8" style={{color:header.txtcolor}}>Team</a>
                  
                 </li>
                 <li className="nav-item ">
                   <a className="nav-link" href="#section 7" style={{color:header.txtcolor}}>Tech</a>
                  
                 </li>
                 <li className="nav-item ">
                   <a className="nav-link" href="#section3" style={{color:header.txtcolor}}>FAQ</a>
                   
                 </li>
                 <li className="nav-item ">
                   <a className="nav-link" href="#section6" style={{color:header.txtcolor}} >OpenSea</a>
                    
                 </li>
              </ul>
              <div class="d-flex" id="form">
              <ul className="navbar-nav shadow me-auto" style={{paddingTop:'6px'}} id="icon-container">
                 <li className="nav-item ">
                   <a className="nav-link" href={header.disclink} target="_blank"><img src={header.icon1} width={header.iconwidth} height={header.iconheight}/></a>
                 </li>
                 <li className="nav-item ">
                   <a className="nav-link" href={header.twitterlink}  target="_blank"><img src={header.icon2} width={header.iconwidth} height={header.iconheight}/></a>
                 </li>
                 <li className="nav-item instagram ">
                   <a className="nav-link" href={header.instalink}  target="_blank"><img src={header.icon3} width={header.iconwidth} height={header.iconheight}/></a>
                 </li>
                 </ul>
     <button class="mybtn" type="submit"><a href={header.btnlink} style={{color:header.btnfontcolor}}>Connect Wallet</a></button>
   </div>
           </div>

        </nav>
     </section>
    )
}