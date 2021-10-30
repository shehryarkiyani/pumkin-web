
import React, { Component,useEffect } from 'react';

import './App.css';


import Header from './components/Header';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import Section6 from './components/section6';
import Section7 from './components/section7';
import Section8 from './components/section8';
import Footer from './components/Footer';
import { Body } from './config';
function App() {
 useEffect(() => {
  var x=document.getElementsByTagName("BODY")[0];
  x.style.backgroundColor = Body.backgroundcolor;
  x.style.color=Body.color
  })
  
  return (
   <>
  <Header/>
  <Section1/>     
  <Section2/>
  <Section3/>
  <Section4/>
 <Section5/>
  <Section6/>   
   <Section7/>
   <Section8/>
      <Footer/>
      
   
      
    
 
      
   </>
  );
}

export default App;
