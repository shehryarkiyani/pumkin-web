import React, { Component } from 'react';
import { section8 } from '../config';
export default function Section8(){
    return(
        <section className="page_width px-5 py-5 mobile_padding" id="section8">
        <div className="row m-0 py-5  p-0 center-flex1 mobile_padding">
           
            <div className="col-xl-5 col-md-12 col-sm-12 p-0 text-right tt_right"><img src={section8.img} style={{marginRight:'100px',marginBottom:'30px'}}  className="lounded-lg hero_div_img" width="400px" />
           </div>
           
           <div className="col-xl-7 col-md-12 p-0 col-txt col-sm-12">
              <div className="chip shadow">
                 <h2 className="heading p-0 m-0 mb-3 text_left" style={{color:section8.headingcolor,fontSize:section8.headingfont}}>Join the Community</h2>
                 <p className="p_css3" style={{color:section8.paracolor,fontSize:section8.parafont}}>Join Discord and Follow our Twitter account to stay up to date with all the latest Punkin news as well a chance to earn yourself a presale spot.</p>
                <a target="_blank" href={section8.link} className="btn theme-btn py-1 px-4 py-0 ml-0 mr-1 my-4 btn_2_hero" style={{color:section8.btnfontcolor,fontSize:section8.btnfontsize,backgroundColor:section8.btnbackgroundcolor}}>Join Discord</a>
              </div>
           </div>
          
        </div>
     </section>
    )
}