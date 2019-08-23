import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Navbar from '@utils/navbar/navbar';
import {TitleLogo} from '@utils/styled-components/index';


declare var TimelineMax: any;
declare var Power4: any;

const BigTitleLogo = styled(TitleLogo)`
  font-size: 50px;
  cursor: pointer;
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.default};
    transform: scale(1);

    transition: all 0.3s ease;
  }
  span:hover {
    color: white;
    transform: scale(1.1) !important;
  }

  @media ${({ theme }) => theme.device.mobileS} { 
    font-size: 60px;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 80px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 115px;
  }

`
const ShowImageBox = styled.div`
  width: 430px;
  height: 300px;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-size: cover;

  @media ${({ theme }) => theme.device.mobileS} { 
    width: 340px;
    height: 260px;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    width: 360px;
    height: 270px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 430px;
    height: 300px;
  }

`

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  position: relative;

  #home-container {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  #home-opts-container {
    margin-top: 75%;
  }

  #home-main-image-container {
    opacity: 0;
  }

  #home-main-image-container.portrait {
    height: 430px;
    width: 300px;
  }


  @media ${({ theme }) => theme.device.mobileS} { 
    #home-opts-container {
      margin-top: 70%;
    }

    #home-main-image-container.portrait {
      height: 320px;
      width: 240px;
    }

  }

  @media ${({ theme }) => theme.device.mobileM} {
    #home-opts-container {
      margin-top: 50%;
    }
  }

  @media ${({ theme }) => theme.device.mobileL} {
    #home-opts-container {
      margin-top: 35%;
    }

    #home-main-image-container.portrait {
      height: 360px;
      width: 270px;
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    #home-opts-container {
      margin-top: 15%;
    }

    #home-main-image-container.portrait {
      height: 430px;
      width: 300px;
    }
  }


`

interface IProps {
}

interface IState {
  image: string;
}

class Home extends React.Component<IProps, IState> {
  initialState: IState = { image: '6db0215-720.jpg' }
  tlImageBoxIn: any
  tlImageBoxOut: any

  constructor(props: IProps) {
    super(props);
    this.state = this.initialState
  }

  //Initial animation when enter
  componentDidMount() {
    let tl = new TimelineMax({});
   
    tl.from('#home-container',.7, {ease: Power4.easeInOut, opacity:0}, 0);
    tl.from('.home-title', 1, {ease: Power4.easeInOut, rotation: 4,  y: 100, scaleY:1.2, opacity: 0});
    tl.to('#home-container',.1, {ease: Power4.easeInOut, overflow:'auto'});     
    
    // prepare the ShowImageBox animations
    this.tlImageBoxIn = new TimelineMax();
    this.tlImageBoxOut = new TimelineMax();


    // this.tlImageBoxOut = new TimelineMax({pause: true});
    // this.tlImageBoxOut.to('#home-main-image-container',.7, {ease: Power4.easeInOut, opacity:0, scale: 0.3});
  }

  // When Mouse Over a title, update color
  handleMouseOver(): void {
    const _this: any = this;
    
    _this[0].setState({
      ...this.state,
      image: _this[1]
    });

    
  }
  handleOptsMouseOver() {
    this.tlImageBoxIn.to('#home-main-image-container',.5, {ease: Power4.easeInOut, opacity:1, scale: 1.1});
  }

  // When Mouse Out a title, start out animation
  handleMouseOut(): void {    
    this.tlImageBoxOut.to('#home-main-image-container',.5, {ease: Power4.easeInOut, opacity:0, scale: 0.9});
  }

  render() {    
    return (
        <HomeContainer>
          <Navbar hamburColor="white" />
          <div id='home-container'>

            <ShowImageBox id='home-main-image-container' className={this.state.image == '3084359-480.jpg' ? 'portrait' : 'landscape'} style={{backgroundImage: 'url("/static/images/Home/' + this.state.image + '")'}}></ShowImageBox>

            {/** 
              TODO: Refact using something like "Angular *ngFor" in React 
                    and iterate an object
              */}
            <div id='home-opts-container' onMouseEnter={this.handleOptsMouseOver.bind(this)} onMouseLeave={this.handleMouseOut.bind(this)}>
              <Link href='/detalles1'>
                <BigTitleLogo onMouseEnter={this.handleMouseOver.bind([this, '6db0215-720.jpg'])} className='home-title'>
                  <span>
                    Duox
                  </span>
                  </BigTitleLogo>
              </Link>
              <BigTitleLogo onMouseEnter={this.handleMouseOver.bind([this, '96e5535-720.jpg'])} className='home-title'>
                <span>
                  Drake
                </span>
                </BigTitleLogo>
              <BigTitleLogo onMouseEnter={this.handleMouseOver.bind([this, '725127e-720.jpg'])} className='home-title'>
                <span>
                  Gaga
                </span>
                </BigTitleLogo>
              <BigTitleLogo onMouseEnter={this.handleMouseOver.bind([this, '86174c1-720.jpg'])} className='home-title'>
                <span>
                  Eminem
                </span>
                </BigTitleLogo>
              <BigTitleLogo onMouseEnter={this.handleMouseOver.bind([this, '390c2a9-480.jpg'])} className='home-title'>
                <span>
                  Sia
                </span>
                </BigTitleLogo>
              <BigTitleLogo onMouseEnter={this.handleMouseOver.bind([this, '958e114-480.jpg'])} className='home-title'>
                <span>
                  Gustav
                </span>
                </BigTitleLogo>
              <BigTitleLogo onMouseEnter={this.handleMouseOver.bind([this, '3084359-480.jpg'])} className='home-title'>
                <span>
                  Adidas
                </span>
                </BigTitleLogo>
              <BigTitleLogo onMouseEnter={this.handleMouseOver.bind([this, '25ae41f-480.jpg'])} className='home-title'>
                <span>
                  Places
                </span>
                </BigTitleLogo>
              <BigTitleLogo onMouseEnter={this.handleMouseOver.bind([this, 'ecf98a4-480.jpg'])} className='home-title'>
                <span>
                  Videos
                </span>
                </BigTitleLogo>
            </div>
          </div>
        </HomeContainer>
    )
  }
}

export default Home;