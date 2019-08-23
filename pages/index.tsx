import React from 'react';
import AnimatedLogo from "@utils/logo/animatedLogo";
import Home from "@layouts/home/home";
import styled from 'styled-components';

declare var TimelineMax: any;
declare var Power2: any;

const PreloadImg = styled.img`
  display: none;
  opacity: 0;
`

const IndexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`

interface IProps {
  name: string;
}
interface IState {
  showAnimatedLogo: boolean;
}

class Index extends React.Component<IProps, IState> {

  initialState: IState = { showAnimatedLogo: true }

  constructor(props: IProps) {
    super(props);
    this.state = this.initialState
  }

  //Initial animation when enter
  componentDidMount() {
    let tl = new TimelineMax({});
    tl.from('#main-index-container',.7, {ease: Power2.easeInOut, backgroundColor: 'white'}, 0);
  }

  // After logo animation completes, show Home component
  showHome(): void {
    this.setState({
      ...this.state,
      showAnimatedLogo: false
    })
  }

  render() {    
    const title='Aluxion Labs';
    const subTitle='Agency';
    
    return (
        <IndexContainer id="main-index-container">
          
        {/** Preload image while animateLogo is runing */}
        <PreloadImg src="/static/images/Home/6db0215-720.jpg"></PreloadImg>
        <PreloadImg src="/static/images/Home/25ae41f-480.jpg"></PreloadImg>
        <PreloadImg src="/static/images/Home/96e5535-720.jpg"></PreloadImg>
        <PreloadImg src="/static/images/Home/390c2a9-480.jpg"></PreloadImg>
        <PreloadImg src="/static/images/Home/958e114-480.jpg"></PreloadImg>
        <PreloadImg src="/static/images/Home/86174c1-720.jpg"></PreloadImg>
        <PreloadImg src="/static/images/Home/725127e-720.jpg"></PreloadImg>
        <PreloadImg src="/static/images/Home/3084359-480.jpg"></PreloadImg>
        <PreloadImg src="/static/images/Home/ecf98a4-480.jpg"></PreloadImg>


         {this.state.showAnimatedLogo && <AnimatedLogo 
                                            lgTitle={title} 
                                            lgSubTitle={subTitle}
                                            notifyNotificationEnd={this.showHome.bind(this)}>
                                          </AnimatedLogo> }

          {!this.state.showAnimatedLogo && <Home></Home>}
        </IndexContainer>
    )
  }
}

export default Index;