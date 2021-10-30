import React, { Component } from 'react';
import { section7 } from '../config';
export default function Section7(){
    return(
        <section className="page_width px-5 py-5 mobile_padding" id="section 7">
        <div className="pt-5 pb-3 head_btm">
            <h2 className="heading p-0 m-0 text-center" style={{color:section7.headingcolor,fontSize:section7.headingfont}}>Launch Week Prizes</h2>
         
           <p className="p_css2 text-center" style={{color:section7.paracolor,fontSize:section7.parafont}}>Don't miss out! Join the Punkin community to be one of the lucky people who will be awarded with a special prize.</p>
        </div>
        <div className="punkin_3">
           <div className="row">
               <div className="column-pool1 my-5">
                  <a href="#">
                     <div className="card-pool ">
                        <div className="bg-black"> <img src={section7.cardpic1} className="card-img-top" alt="..."/></div>
                        <div className="card-body creators-card-body text-left px-0">
                           <h4 className="card-title text-light" style={{color:section7.cardtitlecolor,fontSize:section7.cardtitlefont}}>Asus Zephyrus Gaming Laptop</h4>
                           <p className="p_css3 text-light" style={{color:section7.para1color,fontSize:section7.para1font}}>$1749 Value</p>
                        </div>
                     </div>

                  </a>
               </div>
               <div className="column-pool1 my-5">
                  <a href="#">
                     <div className="card-pool ">
                        <div className="bg-black"> <img src={section7.cardpic2} className="card-img-top" alt="..."/></div>
                        <div className="card-body creators-card-body text-left px-0">
                           <h4 className="card-title text-light" style={{color:section7.cardtitlecolor,fontSize:section7.cardtitlefont}}>Sony Playstation PS5</h4>
                           <p className="p_css3 text-light" style={{color:section7.para1color,fontSize:section7.para1font}}>$1009 Value</p>
                        </div>
                     </div>

                  </a>
               </div>
               <div className="column-pool1 my-5">
                  <a href="#">
                     <div className="card-pool ">
                        <div className="bg-black"> <img src={section7.cardpic3} className="card-img-top" alt="..."/></div>
                        <div className="card-body creators-card-body text-left px-0">
                           <h4 className="card-title text-light" style={{color:section7.cardtitlecolor,fontSize:section7.cardtitlefont}}>Somos Move Bluetooth Speakers</h4>
                           <p className="p_css3 text-light" style={{color:section7.para1color,fontSize:section7.para1font}}>$399 Value</p>
                        </div>
                     </div>

                  </a>
               </div>
            </div>
            
        </div>
     </section>
    )
}