import React, { Component } from 'react';
import { section4 } from '../config';
export default function Section4(){
    return(
        <section className="page_width px-5 py-5 mobile_padding" id="section4">
        <div className="py-5 head_btm mb-3">
           <h2 className="heading p-0 m-0 text-center" style={{color:section4.headingcolor,fontSize:section4.headingfont}}>Future Roadmap</h2>
        
        </div>

        <div className="traits mt-5">
            <ul>
                <li className="p_css2" style={{color:section4.txtcolor,fontSize:section4.txtfont}}>With the help of the community several rare Punkins will be used to create a comic book and animated cartoon series.</li>
                <li className="p_css2" style={{color:section4.txtcolor,fontSize:section4.txtfont}}>The Punkin Launcher Game will be further developed to add more advanced features and levels.</li>
                <li className="p_css2" style={{color:section4.txtcolor,fontSize:section4.txtfont}}>Special NFT airdrops for all Punkin holders are already being planned!</li>
                <li className="p_css2" style={{color:section4.txtcolor,fontSize:section4.txtfont}}>Season 2, October 2022, 6660 Punkins will Rise with even more and updated traits.</li>
                <li className="p_css2" style={{color:section4.txtcolor,fontSize:section4.txtfont}}>Season 1 Punkin holders will be rewarded with Season 2 presale access.</li>
            </ul>
        </div>
     </section>
    )
}