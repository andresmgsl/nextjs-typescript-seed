import React from 'react';
import styled from 'styled-components';

import Navbar from '@utils/navbar/navbar';

declare var TimelineMax: any;
declare var Power3: any;


const DetallesContainer = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  
  
  #detalles1-container {
    overflow: hidden;
    width: 100%;
    height: 100%;      

    background-color: white;
  }
`


class Detalles1 extends React.Component {

  componentDidMount() {
    let tl = new TimelineMax({});
   
    
    tl.from('#detalles1-main',0.5, {ease: Power3.easeInOut,  opacity:0, backgroundColor: 'black'}, 0);
    tl.from('#detalles1-layout',1, {ease: Power3.easeInOut, opacity:0});
    tl.to('#detalles1-container',0.1, {ease: Power3.easeInOut, overflow:'auto'});
  }

  render() {    
    return (
        <DetallesContainer id="detalles1-main">
          <Navbar />
          <div id='detalles1-container'>
            <div id="detalles1-layout">
             
            </div>
          </div>
        </DetallesContainer>
    )
  }
}

export default Detalles1;