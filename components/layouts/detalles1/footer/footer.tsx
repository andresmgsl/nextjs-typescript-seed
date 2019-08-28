import React from 'react';
import Router from 'next/router'

import { FlexContainer, ImageContainer } from '@utils/styled-components/index';
import { setInitialState, footerTextEnterAnimation, footerTextOutAnimation } from '@utils/animations/footerText';
import { Footer, FooterBody, BigText } from './utils';



class DetailFooter extends React.Component {
    textMaskClass: string = '.textMask'
    htmlTextMaskClass: string  = 'textMask'
    clipPathId: string = 'clipPath'
    svgId: string = 'animated-footer-title'
    backImageId: string = 'footer-back-image';
    smallFooterText: string = 'small-footer-text';
    tl: any;

    //Initial animation when enter
    componentDidMount() {
        // prepare the ShowImageBox animations
        this.tl = setInitialState(this.textMaskClass, '#' + this.svgId, '#' + this.backImageId, '#' + this.smallFooterText, this.handleCompleteAnimation);

    }

    // When Mouse Over a title, update color
    handleMouseDown(): void {
        footerTextEnterAnimation(this.tl);
    }

    // When Mouse Out a title, start out animation
    handleMouseUp(): void {
        footerTextOutAnimation(this.tl);
    }

    handleCompleteAnimation(): void {
        Router.push('/detalles2');
    }

    render() {
        return (
            <Footer>
                <FlexContainer>
                    <BigText>
                        <div onMouseUp={this.handleMouseUp.bind(this)} onMouseDown={this.handleMouseDown.bind(this)} className="title-footer-box" style={{color: "white"}}>

                            {/** TODO: Make widths and heights dynamic - Maybe a new child component*/}
                            <svg id={this.svgId} xmlns="http://www.w3.org/2000/svg" >
                            <defs>
                            <clipPath id={this.clipPathId}>
                                <rect className={this.htmlTextMaskClass} x="0" y="0" width="650" height="190" fill="black" />
                            </clipPath>  
                            </defs> 
                            <rect x="0" y="0" width="650" height="190" fill="none" /> 
                            <text textAnchor="middle" x="325" y="190" fontSize={260} fill="#575757">Drake</text>
                            <rect className={this.htmlTextMaskClass} x="0" y="0" width="650" height="190" fill="none" />
                            <g id="clipPathReveal" clipPath={'url(#' + this.clipPathId + ')'}>
                                <text textAnchor="middle" x="325" y="190" fontSize={260} fill="white">Drake</text>
                            </g>
                            </svg>  

                        </div>
                    </BigText>
                    <FooterBody>
                        <ImageContainer id={this.backImageId} style={{overflow: "hidden"}}>
                            <img src="/static/images/Detalle2/96e5535-720.jpg"></img>
                        </ImageContainer>
                        <p id={this.smallFooterText}>
                            Click & Hold
                        </p>
                    </FooterBody>
                </FlexContainer>
            </Footer>
        )
    }
}

export default DetailFooter;