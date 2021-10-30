import React, { Component } from 'react';
import { section2 } from '../config';
export default function Section2(){
    return(
        <section className="page_width px-5 py-5 mobile_padding">
         <div className="py-5 head_btm">
            <h2 className="heading p-0 m-0 text-center" style={{color:section2.headingcolor,fontSize:section2.headingfont}}>Traits</h2>
            <h2 className="sub-heading p-0 m-0 text-center mt-2 mb-4" style={{color:section2.subheadingcolor,fontSize:section2.subheadingfont}}>Crypto Punkins</h2>
         </div>
         <div className="traits">
             <ul>
                 <li className="p_css" style={{color:section2.txtcolor,fontSize:section2.txtfont}}>Punkins come from beyond the blockchain and therefore they have some unusual traits and features.</li>
                 <li className="p_css" style={{color:section2.txtcolor,fontSize:section2.txtfont}}>Some of their unique features are head, eyes, glasses, mouth, background and the possibility of some extra spooky traits.</li>
                 <li className="p_css" style={{color:section2.txtcolor,fontSize:section2.txtfont}}>The rarity of each Crypto Punkin is based on the overall scarcity of traits as well as uniqueness and desirability of each combination.</li>
                
             </ul>
         </div>
      </section>
    )
}