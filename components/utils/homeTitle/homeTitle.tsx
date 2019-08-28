import React from 'react';

import { setInitialState, homeTitlesEnterAnimation, homeTitlesOutAnimation } from '@utils/animations/homeTitles';

import { HomeTitleStyle } from './utils';


type AnimatedLogoProps = {
  text?: string
  titleFontSize?: string
  id?: number

  notifyClickMade(): void
}


class HomeTitle extends React.Component<AnimatedLogoProps> {
  textMaskClass: string;
  htmlTextMaskClass: string;
  clipPathId: string;
  svgId: string;
  tl: any;

  constructor(props: AnimatedLogoProps) {
    super(props);
    this.textMaskClass = '.textMask' + props.id;
    this.htmlTextMaskClass  = 'textMask' + props.id;
    this.clipPathId = 'clipPath' + props.id;
    this.svgId = 'animated-home-title' + props.id;
  }

  whenAnimationDone() {
    this.props.notifyClickMade();
  }
  
  // This's use because we need to wait for DOM full load
  componentDidMount() {
    // classNames of logo parts to animate
    this.tl = setInitialState(this.textMaskClass, '#' + this.svgId);
    
  }

  handleMouseOver() {
    homeTitlesEnterAnimation(this.tl);
  }

  handleMouseOut() {
    homeTitlesOutAnimation(this.tl);
  }

  render() {    
    return (
      <HomeTitleStyle onMouseEnter={this.handleMouseOver.bind(this)} onMouseLeave={this.handleMouseOut.bind(this)}>
        <div className="title-box" style={{color: "white"}}>

            {/** TODO: Make widths and heights dynamic - Maybe a new child component*/}
            <svg id={this.svgId} xmlns="http://www.w3.org/2000/svg" >
              <defs>
              <clipPath id={this.clipPathId}>
                  <rect className={this.htmlTextMaskClass} x="0" y="0" width="450" height="110" fill="black" />
              </clipPath>  
              </defs> 
              <rect x="0" y="0" width="450" height="110" fill="none" /> 
              <text textAnchor="middle" x="210" y="80" fontSize={this.props.titleFontSize ? this.props.titleFontSize: 115} fill="#575757">{this.props.text}</text>
              <rect className={this.htmlTextMaskClass} x="0" y="0" width="450" height="110" fill="none" />
              <g id="clipPathReveal" clipPath={'url(#' + this.clipPathId + ')'}>
               <text textAnchor="middle" x="210" y="80" fontSize={this.props.titleFontSize ? this.props.titleFontSize: 115} fill="white">{this.props.text}</text>
              </g>
            </svg>  

        </div>
                
      </HomeTitleStyle>

    )
  }
}

export default HomeTitle