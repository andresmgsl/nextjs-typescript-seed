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
  titleFontSize?: number,

  notifyNotificationEnd(): void
}


class AnimatedLogo extends React.Component<AnimatedLogoProps> {
  constructor(props: AnimatedLogoProps) {
    super(props);
  }

  whenAnimationDone() {
    this.props.notifyNotificationEnd();
  }
  
  // This's use because we need to wait for DOM full load
  componentDidMount() {

    // TODO: with more time, this would be refact. css props, child component

    // classNames
    const textMaskClass = ".textMask",
          titleBoxClass = ".title-box",
          subTitleBoxClass = ".subtitle-box";
          

    // times
    const initDelay = 1,
          initSecondDelay = initDelay + 0.25,
          titleInDuration = .6,
          subTitleInDuration = titleInDuration + .1,
          maskDuration = 1.7,
          titleOutDuration = {
            "short": .5,
            "long": .9
          },
          subTitleOutDuration = {
            "short": .5,
            "long": .9
          };
      


    TweenMax.set (textMaskClass, {scaleX:0, transformOrgin: 'left center'});
    let tl = new TimelineMax({onComplete:this.whenAnimationDone.bind(this)});
   
    tl.from(titleBoxClass,titleInDuration, {ease: Power3.easeInOut,  opacity: 0}, initDelay); 
    tl.from(titleBoxClass,titleInDuration, {ease: Power3.easeInOut, rotation: 4,  y: 40, scaleY:1.4}, initDelay); // both start at time: 1, for smooth animation
  
    tl.from(subTitleBoxClass,subTitleInDuration, {ease: Power3.easeInOut, rotation: 4, opacity: 0}, initSecondDelay); 
    tl.from(subTitleBoxClass,subTitleInDuration, {ease: Power3.easeInOut, y: 20, scaleY:1.4}, initSecondDelay); // both start 0.25 s later, to add follow effect
  
    // This is the sugar. We animate the hidden mask to achive text filling effect. CustomEase extra pluging is used
    tl.to(textMaskClass, maskDuration, { ease: CustomEase.create("custom", `M0,0 C0.212,0 0.257,0.014 0.336,0.09 0.412,0.164 0.436,0.356 0.478,0.504 0.527,0.68 0.584,0.816 0.644,0.882 0.716,0.961 0.734,1 1,1`), scaleX:1}); // for better visualitation look at GreenSock Ease Visualizer
  
    // Add some timeline tagsinitSecondDelay
    tl.add("startFirstOutAnimation", initDelay + titleInDuration + subTitleInDuration + maskDuration + .3); //  An .3 extra delay (TODO: Rethink and refact)
    tl.add("startSecondOutAnimation", initDelay + titleInDuration + subTitleInDuration + maskDuration + .3); // An .3 extra delay (TODO: Rethink and refact)
  
    tl.to(titleBoxClass,titleOutDuration.short, {ease: Power3.easeInOut, rotation: -3, opacity: 0, scaleY:1.1}, "startFirstOutAnimation");
    tl.to(titleBoxClass,titleOutDuration.long, {ease: Power3.easeInOut, y: -100 }, "startFirstOutAnimation");
  
    tl.to(subTitleBoxClass,subTitleOutDuration.short, {ease: Power3.easeInOut, rotation: -3, opacity: 0, scaleY:1.1}, "startSecondOutAnimation");
    tl.to(subTitleBoxClass,subTitleOutDuration.long, {ease: Power3.easeInOut, y: -100 }, "startSecondOutAnimation");
  
  }

  render() {    
    return (
      <div>
        <AnimatedLogoStyle />
        <div className="title-box">
            {/** TODO: Make widths and heights dynamic - Maybe a new child component*/}
            <svg id="animated-logo" xmlns="http://www.w3.org/2000/svg" >
              <defs>
              <clipPath id="theClipPath">
                  <rect className="textMask" x="0" y="0" width="230" height="50" fill="black" />
              </clipPath>  
              </defs> 
              <rect x="0" y="0" width="230" height="50" fill="none" /> 
              <text textAnchor="middle" x="110" y="40" fontSize={this.props.titleFontSize ? this.props.titleFontSize: 44} fill="#575757">{this.props.lgTitle}</text>
              <rect className="textMask" x="0" y="0" width="230" height="50" fill="none" />
              <g id="clipPathReveal" clipPath="url(#theClipPath)">
               <text textAnchor="middle" x="110" y="40" fontSize={this.props.titleFontSize ? this.props.titleFontSize: 44} fill="white">{this.props.lgTitle}</text>
              </g>
            </svg>  

        </div>
        
        <NewTitle className="subtitle-box">{this.props.lgSubTitle}</NewTitle>
    </div>

    )
  }
}

export default AnimatedLogo