import React from 'react';
import  styled, { createGlobalStyle } from 'styled-components';
import { Subtitle } from '@utils/styled-components/index';

// TODO: Add realtion between GSAP library and its typescript @type and react-gsap
declare var TimelineMax: any;
declare var Power3: any;
declare var TweenMax: any; 
declare var CustomEase: any;


const NewTitle = styled(Subtitle).attrs({
  'aria-label': 'Logo',
})`
  text-align: center;
  font-weight: 500;
`

const AnimatedLogoStyle = createGlobalStyle`

  .subtitle-box,
  .title-box {
    display: block;
    position: relative;
    height: 50px;
    width: 220px;
    margin: 0 auto;
  }

  .title-box {
    height: 50px;
  }
  .subtitle-box {
    height: 25px;
  }

  #animated-logo {
    position: relative;
    width: 230px;
    height: 50px;
  }
  
`

type AnimatedLogoProps = {
  lgTitle?: string,
  lgSubTitle?: string,
  
  notifyNotificationEnd(): void
}


class AnimatedLogo extends React.Component<AnimatedLogoProps> {
  constructor(props: AnimatedLogoProps) {
    super(props);
    console.log(props);
  }

  whenAnimationDone() {
    this.props.notifyNotificationEnd();
  }
  
  componentDidMount() {
    // This code goes here because we need to wait for DOM full load

    TweenMax.set (".textMask", {scaleX:0, transformOrgin: 'left center'});
    let tl = new TimelineMax({onComplete:this.whenAnimationDone.bind(this)});
   
    tl.from(".title-box",.6, {ease: Power3.easeInOut,  opacity: 0}, 1); 
    tl.from(".title-box",.6, {ease: Power3.easeInOut, rotation: 4,  y: 40, scaleY:1.4}, 1); // both start at time: 1, for smooth animation
  
    tl.from(".subtitle-box",.7, {ease: Power3.easeInOut, rotation: 4, opacity: 0}, 1.25); 
    tl.from(".subtitle-box",.7, {ease: Power3.easeInOut, y: 20, scaleY:1.4}, 1.25);
  
    tl.to(".textMask", 1.7, { ease: CustomEase.create("custom", "M0,0 C0.212,0 0.257,0.014 0.336,0.09 0.412,0.164 0.436,0.356 0.478,0.504 0.527,0.68 0.584,0.816 0.644,0.882 0.716,0.961 0.734,1 1,1"), scaleX:1}); // for better visualitation look at GreenSock Ease Visualizer
  
    tl.add("end", .9 + 1.5 + .3 + 1); // 0.9 + 1.5 +  0.1 extra delay
    tl.add("end2", .9 + 1.5 + .4 + 1); // 0.9 + 1.5 +  0.1 extra delay
  
    tl.to(".title-box",0.5, {ease: Power3.easeInOut, rotation: -3, opacity: 0, scaleY:1.1}, "end");
    tl.to(".title-box",0.9, {ease: Power3.easeInOut, y: -100 }, "end");
  
    tl.to(".subtitle-box",0.5, {ease: Power3.easeInOut, rotation: -3, opacity: 0, scaleY:1.1}, "end2");
    tl.to(".subtitle-box",0.9, {ease: Power3.easeInOut, y: -100 }, "end2");
  
  }

  render() {    
    return (
      <div>
        <AnimatedLogoStyle />
        <div className="title-box">
            {/** TODO: Make widths and heights dynamic  */}
            <svg id="animated-logo" xmlns="http://www.w3.org/2000/svg" >
              <defs>
              <clipPath id="theClipPath">
                  <rect className="textMask" x="0" y="0" width="230" height="50" fill="black" />
              </clipPath>  
              </defs> 
              <rect x="0" y="0" width="230" height="50" fill="none" /> 
              <text textAnchor="middle" x="110" y="40" fontSize="36" fill="#575757">{this.props.lgTitle}</text>
              <rect className="textMask" x="0" y="0" width="230" height="50" fill="none" />
              <g id="clipPathReveal" clipPath="url(#theClipPath)">
               <text textAnchor="middle" x="110" y="40" fontSize="36" fill="white">{this.props.lgTitle}</text>
              </g>
            </svg>  

        </div>
        
        <NewTitle className="subtitle-box">{this.props.lgSubTitle}</NewTitle>
    </div>

    )
  }
}

export default AnimatedLogo