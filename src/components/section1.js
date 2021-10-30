import React, { Component } from 'react';
import { header, section1 } from '../config';
export default function Section1(){
    return(
        <section className="page_width mobile_padding" id="section1">
        <div className="row m-0 hero-section px-5 ">
           <div className="col-xl-7 col-md-12 p-0 col-txt col-sm-12 pr-5 m_btm">
              <div className="chip shadow">
                 <p className="p_css" style={{fontSize:section1.txtfont,color:section1.txtcolor}}>"This October, 666 Pumpkin Head Punks will rise <br/>from beyond the blockchain!"</p>
              </div>
              <h1 className="heading py-3" style={{fontSize:section1.headingfont,color:section1.headingcolor}}>PUNKIN POWΞR</h1>
              <div className="chip shadow">
                 <p className="p_css" style={{fontSize:section1.txtfont,color:section1.txtcolor}} >Crypto Punkins are unique pieces of digital artwork generated randomly to create one of a kind NFT collectables that double as in game avatars and profile pictures.</p><p className="">On Oct 31st, special prizes and ETH will be awarded to rare Punkin owners. </p>
              </div>
              <div className="py-5">
                 <a href={section1.btn1link} className="btn theme-btn py-1 px-4 py-3 ml-0 mr-1 btn_2_hero" target="_blank" style={{color:section1.btnfontcolor,fontSize:section1.btnfontsize,backgroundColor:section1.btn1backgroundcolor}}>Join Discord</a>
                 <a href={section1.btn2link} className="btn theme-btn-dark py-1 px-4 py-3 ml-3 btn_2_hero" target="_blank" style={{color:section1.btnfontcolor,fontSize:section1.btnfontsize,backgroundColor:section1.btn2backgroundcolor}}>Twitter</a>
                 
              </div>
           </div>
           <div className="col-xl-5 col-md-12 col-sm-12 p-0 text-right m_top">
             <img src={section1.img} className=" lounded-lg hero_div_img"/>
           </div>
        </div>
     </section>
    )
}