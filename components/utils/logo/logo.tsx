import { Subtitle } from '@utils/styled-components/index';
import styled from 'styled-components';
import React from 'react';


// TODO: Add realtion between GSAP library and its @type
declare var TimelineMax: any;
declare var Power3: any;
declare var TweenMax: any; 


const NewTitle = styled(Subtitle).attrs({
  'aria-label': 'Logo',
})`
  text-align: center;
  font-weight: 500;
`

class AnimatedLogo extends React.Component {
  componentDidMount() {

    
    TweenMax.set (".masker", {scaleX:0, transformOrgin: "left center"});
    let tl = new TimelineMax({paused:false});
    tl.from(".box-container",.6, {ease: Power3.easeInOut,  opacity: 0}); 
  
    tl.from(".box-container",.6, {ease: Power3.easeInOut, rotation: 4,  y: 40, scaleY:1.4}, 0); // both start at time: 0 
  
    tl.from(".box-container-2",.7, {ease: Power3.easeInOut, rotation: 4, opacity: 0}, 0.25); 
    tl.from(".box-container-2",.7, {ease: Power3.easeInOut, y: 20, scaleY:1.4}, 0.25);
  
  
    tl.to(".masker", 1.5, { ease: Power3.easeInOut, scaleX:1}); // for better visualitation look at GreenSock Ease Visualizer
  
  
    tl.add("end", .9 + 1.5 + .3); // 0.9 + 1.5 +  0.3 extra delay
    tl.add("end2", .9 + 1.5 + .3 + .1); // 0.9 + 1.5 +  0.3 extra delay
  
    tl.to(".box-container",0.5, {ease: Power3.easeInOut, rotation: -3, opacity: 0, scaleY:1.2}, "end");
    tl.to(".box-container",0.9, {ease: Power3.easeInOut, y: -100 }, "end");
  
    tl.to(".box-container-2",0.5, {ease: Power3.easeInOut, rotation: -3, opacity: 0, scaleY:1.2}, "end2");
    tl.to(".box-container-2",0.9, {ease: Power3.easeInOut, y: -100 }, "end2");
  
  }

  render() {    
    return (
      <div>
        <div className="box-container">
            <svg id="demo" xmlns="http://www.w3.org/2000/svg" >
            <defs>
            <clipPath id="theClipPath">
                <rect className="masker" x="0" y="0" width="230" height="50" fill="black" />
            </clipPath>  
            </defs> 
            <rect x="0" y="0" width="230" height="50" fill="none" /> 
            <text textAnchor="middle" x="110" y="40" fontSize="36" fill="#575757">Aluxion Labs</text>
            <rect className="masker" x="0" y="0" width="230" height="50" fill="none" />
            <g id="clipPathReveal" clipPath="url(#theClipPath)">
            <text textAnchor="middle" x="110" y="40" fontSize="36" fill="white">Aluxion Labs</text>
            </g>
            </svg>  

        </div>
        
        <NewTitle className="box-container-2">Agency</NewTitle>
    </div>

    )
  }
}

export default AnimatedLogo