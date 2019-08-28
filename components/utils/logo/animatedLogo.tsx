import React from 'react';

import LogoMainAnimation from '@utils/animations/logo';

import { NewTitle, AnimatedLogoStyle } from './utils';


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

    // classNames of logo parts to animate
    const textMaskClass = ".textMask",
          titleBoxClass = ".title-box",
          subTitleBoxClass = ".subtitle-box";
          

    LogoMainAnimation(textMaskClass,titleBoxClass,subTitleBoxClass,this.whenAnimationDone,this)
          
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