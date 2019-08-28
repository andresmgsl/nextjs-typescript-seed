import React from 'react';
import Link from 'next/link';

import Navbar from '@utils/navbar/navbar';
import homeEnterAnimation from '@utils/animations/homeEnter';
import homeImages, {homeImageType} from '@config/data/homeImages';
import HomeTitle from '@utils/homeTitle/homeTitle';

import { BigTitleLogo, ShowImageBox, HomeContainer } from './utils';

declare var TimelineMax: any;
declare var Power4: any;


interface IProps {
}

interface IState {
  images: Array<homeImageType>; 
  currentOrientation: string;
}

class Home extends React.Component<IProps, IState> {
  initialState: IState = {
                images: homeImages, 
                currentOrientation: "landscape"
              }

  tlImageBoxIn: any
  tlImageBoxOut: any

  constructor(props: IProps) {
    super(props);
    this.state = this.initialState
  }

  //Initial animation when enter
  componentDidMount() {

    homeEnterAnimation('#home-container','.home-title');

    // prepare the ShowImageBox animations
    this.tlImageBoxIn = new TimelineMax();
    this.tlImageBoxOut = new TimelineMax();

  }

  // When Mouse Over a title, update color
  handleMouseOver(): void {
    const _this: any = this;

    _this[0].setState({
      ...this.state,
      currentOrientation: _this[1].orientation
    });

    _this[0].tlImageBoxIn.to(_this[2],.6, {ease: Power4.easeInOut, opacity:1, scale: 1.1});
    
  }

  // When Mouse Out a title, start out animation
  handleMouseOut(): void {    
    const _this: any = this;

    _this[0].tlImageBoxOut.to(_this[1],.6, {ease: Power4.easeInOut, opacity:0, scale: 0.8});
  }

  render() {    
    return (
        <HomeContainer>
          <Navbar hamburColor="white" />
          <div id='home-container'>

            {
              this.state.images.map((item: homeImageType, index: number) => (

                <ShowImageBox key={index} data-extra={item.name} id={'home-main-image-container-' + index} className={this.state.currentOrientation } style={{backgroundImage: 'url("/static/images/Home/' + item.image + '")'}}></ShowImageBox>

              ))
            }

            <div id='home-opts-container'>
                            
              {
                this.state.images.map((item: homeImageType, index: number) => (


                  <Link key={index} href={`${item.link ? item.link: '/'}`}>
                    <BigTitleLogo className='home-title' onMouseEnter={this.handleMouseOver.bind([this, item, "#home-main-image-container-" + index])} onMouseLeave={this.handleMouseOut.bind([this, "#home-main-image-container-" + index])}>
                      <HomeTitle id={index} text={item.name} notifyClickMade={alert}></HomeTitle>
                    </BigTitleLogo>

                  </Link>

                ))
              }

            </div>
          </div>
        </HomeContainer>
    )
  }
}

export default Home;