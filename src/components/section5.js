import React, { Component } from 'react';
import { section4, section5 } from '../config';
export default function Section5(){
    return(
        <section className="page_width px-5 py-4 mobile_padding" id="section5">
        <div className="row m-0 py-5  p-0 center-flex1 mobile_padding">
           <div className="col-xl-7 col-md-12 p-0 col-txt col-sm-12">
              <div className="chip shadow">
                 <h2 className="heading p-0 m-0 mb-3 text-left" style={{color:section5.headingcolor,fontSize:section5.headingfont}}>Trick or Treat</h2>
                 <p className="p_css3" style={{color:section5.para1color,fontSize:section5.para1font}}>On October 31st the owners of the top 20% rarest Punkins will receive a split of 20% ETH raised. Addtional Prizes will also be awarded to random Punkin holders!</p>
                 <ul>
                <li className="p_css3" style={{color:section5.para1color,fontSize:section5.para1font}}>Punkins Costume Contest</li>
                <li className="p_css3" style={{color:section5.para1color,fontSize:section5.para1font}}>Punkins Meme Contest</li>
                <li className="p_css3" style={{color:section5.para1color,fontSize:section5.para1font}}>Community Art Contest</li>
                </ul>
               
              </div>
           </div>
           <div className="col-xl-5 col-md-12 col-sm-12 p-0 text-right tt_right">
             <img src={section5.img} className="lounded-lg hero_div_img"/>
           </div>
        </div>
                 <div className="roadmap">
            <div className="row">
                <div className="col-md-5">
                    <p className="p_css1" style={{color:section5.bigparacolor,fontSize:section5.bigparafont}}>20% Punkins SOLD</p>
                    <p className="p_css2" style={{color:section5.para2color,fontSize:section5.para2font}}>20 Punkin Giveaway<br/>
                        - 10 NFT giveaways in Discord<br/>
                        - 10 NFT giveaways on Twitter</p>
                </div>
                <div className="col-md-2">
                </div>
                <div className="col-md-5">
                    <p className="p_css1"  style={{color:section5.bigparacolor,fontSize:section5.bigparafont}}>50% Punkins SOLD</p>
                    <p className="p_css2" style={{color:section5.para2color,fontSize:section5.para2font}}>- Community Vote on Charity Donation (5%) <br/>
                     - Launch Week Prize Drops Begin</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <p className="p_css1"  style={{color:section5.bigparacolor,fontSize:section5.bigparafont}}>80% Punkins SOLD</p>
                    <p className="p_css2" style={{color:section5.para2color,fontSize:section5.para2font}}>- Crypto Punkins will be added to rarity.tools <br/>
- Start working on the Crypto Punkins Comic Book <br/>
- Community Planning & Suggestions</p>
                </div>
                <div className="col-md-2">
                </div>
                <div className="col-md-5">
                    <p className="p_css1"  style={{color:section5.bigparacolor,fontSize:section5.bigparafont}}>100% Punkins SOLD</p>
                    <p className="p_css2" style={{color:section5.para2color,fontSize:section5.para2font}}> - Punkin Costume Contest  Twitter & Discord <br/>
- Punkin Meme Contest <br/>
- Community Art Contest<br/>
- Start working on animated video series

</p>
                </div>
            </div>
        </div>
     </section>
    )
}