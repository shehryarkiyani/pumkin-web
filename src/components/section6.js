import React, { Component } from 'react';
import { section6 } from '../config';
export default function Section6(){
    return(
        <section className="page_width px-5 py-5 mobile_padding" id="section6">
        <div className="pt-5 pb-3 head_btm">
            <h2 className="heading p-0 m-0 text-center" style={{color:section6.headingcolor,fontSize:section6.headingfont}}>Punkins are here...</h2>
        
           <p className="p_css2 text-center" style={{color:section6.paracolor,fontSize:section6.parafont}}>We SOLD OUT in only 10 min!</p>
        </div>
               <div className="">
                   <div style={{margin:'auto', textAlign:'center'}}>
                     <a href={section6.link}className="btn theme-btn" type="button" target="_blank" style={{color:section6.btnfontcolor,fontSize:section6.btnfontsize,backgroundColor:section6.btnbackgroundcolor}}>Buy on OpenSea.io</a>
                   </div>
                   
               </div>
               
     </section>
    )
}