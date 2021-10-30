import React, { Component } from 'react';
import { section3 } from '../config';
export default function Section3(){
    return(
        <section className="page_width px-5 py-5 mobile_padding" id="section3">
        <div className="py-5 head_btm">
           <h2 className="heading p-0 m-0 text-center" style={{color:section3.headingcolor,fontSize:section3.headingfont}}>What To Know</h2>
           <h2 className="sub-heading p-0 m-0 text-center mt-2 mb-4" style={{color:section3.subheadingcolor,fontSize:section3.subheadingfont}}>F.A.Q.</h2>
        </div>
        <div className="faq_sec">
                    
            
           <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
           
          
             <div className="card" style={{backgroundColor:section3.cardbackground,border:section3.cardborder}}>
           
          
               <div className="card-header" role="tab" id="headingOne1">
                 <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                   aria-controls="collapseOne1">
                   <h5 className="mb-0 text-cs-y" style={{color:section3.questioncolor,fontSize:section3.questionfont}}>
                     What is the total supply? <i className="fas fa-angle-down rotate-icon text-cs-y"></i>
                   </h5>
                 </a>
               </div>
           
           
               <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                 data-parent="#accordionEx">
                 <div className="card-body text-light" style={{color:section3.answercolor,fontSize:section3.answerfont}}>
                   Only 666 unique Punkin NFTs will be minted.
                 </div>
               </div>
           
             </div>
          
             <div className="card" style={{backgroundColor:section3.cardbackground,border:section3.cardborder}}>
           
           
               <div className="card-header" role="tab" id="headingTwo2">
                 <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                   aria-expanded="false" aria-controls="collapseTwo2">
                   <h5 className="mb-0 text-cs-y" style={{color:section3.questioncolor,fontSize:section3.questionfont}}>
                     When is the launch? <i className="fas fa-angle-down rotate-icon text-cs-y"></i>
                   </h5>
                 </a>
               </div>
           
              
               <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                 data-parent="#accordionEx">
                 <div className="card-body text-light" style={{color:section3.answercolor,fontSize:section3.answerfont}}>
                  Public mint will be on October 8th @12pm MST.
                 </div>
               </div>
           
             </div>
         
             <div className="card" style={{backgroundColor:section3.cardbackground,border:section3.cardborder}}>
           
            
               <div className="card-header" role="tab" id="headingThree3">
                 <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                   aria-expanded="false" aria-controls="collapseThree3">
                   <h5 className="mb-0 text-cs-y" style={{color:section3.questioncolor,fontSize:section3.questionfont}}>
                     Will there be a pre-sale? <i className="fas fa-angle-down rotate-icon text-cs-y"></i>
                   </h5>
                 </a>
               </div>
           
             
               <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3"
                 data-parent="#accordionEx">
                 <div className="card-body text-light" style={{color:section3.answercolor,fontSize:section3.answerfont}}>
                   Yes, active community members will be rewarded with pre-sale. Pre-sale will launch 24 hours in advance of public mint.
                 </div>
               </div>
           
             </div>
            
             <div className="card"style={{backgroundColor:section3.cardbackground,border:section3.cardborder}} >
           
            
               <div className="card-header" role="tab" id="headingThree4">
                 <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapsefour4"
                   aria-expanded="false" aria-controls="collapsefour4">
                   <h5 className="mb-0 text-cs-y" style={{color:section3.questioncolor,fontSize:section3.questionfont}}>
                     How much does it cost to mint a Punkin NFT? <i className="fas fa-angle-down rotate-icon text-cs-y"></i>
                   </h5>
                 </a>
               </div>
           
              
               <div id="collapsefour4" className="collapse" role="tabpanel" aria-labelledby="headingThree4"
                 data-parent="#accordionEx">
                 <div className="card-body text-light" style={{color:section3.answercolor,fontSize:section3.answerfont}}>
                   0.066 ETH + gas
                 </div>
               </div>
           
             </div>
            
             <div className="card" style={{backgroundColor:section3.cardbackground,border:section3.cardborder}}>
           
            
               <div className="card-header" role="tab" id="headingThree5">
                 <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapsefive5"
                   aria-expanded="false" aria-controls="collapsefive5">
                   <h5 className="mb-0 text-cs-y" style={{color:section3.questioncolor,fontSize:section3.questionfont}}>
                    Is there a Crypto Punkins game? <i className="fas fa-angle-down rotate-icon text-cs-y"></i>
                   </h5>
                 </a>
               </div>
           
          
               <div id="collapsefive5" className="collapse" role="tabpanel" aria-labelledby="headingThree5"
                 data-parent="#accordionEx">
                 <div className="card-body text-light" style={{color:section3.answercolor,fontSize:section3.answerfont}}>
                   Yes! Development of a Punkin Launcher game has already begun! Get ready to launch your Punkin to greatness!
                 </div>
               </div>
           
             </div>
            
           
           </div>
         
        </div>
     </section>
    )
}