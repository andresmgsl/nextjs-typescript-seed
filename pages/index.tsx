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
            
          {/** Preload image while animateLogo is runing. Better performance */}
          <PreloadImg className="preload-image-hidden" src="/static/images/Home/6db0215-720.jpg"></PreloadImg>
          <PreloadImg className="preload-image-hidden" src="/static/images/Home/25ae41f-480.jpg"></PreloadImg>
          <PreloadImg className="preload-image-hidden" src="/static/images/Home/96e5535-720.jpg"></PreloadImg>
          <PreloadImg className="preload-image-hidden" src="/static/images/Home/390c2a9-480.jpg"></PreloadImg>
          <PreloadImg className="preload-image-hidden" src="/static/images/Home/958e114-480.jpg"></PreloadImg>
          <PreloadImg className="preload-image-hidden" src="/static/images/Home/86174c1-720.jpg"></PreloadImg>
          <PreloadImg className="preload-image-hidden" src="/static/images/Home/725127e-720.jpg"></PreloadImg>
          <PreloadImg className="preload-image-hidden" src="/static/images/Home/3084359-480.jpg"></PreloadImg>
          <PreloadImg className="preload-image-hidden" src="/static/images/Home/ecf98a4-480.jpg"></PreloadImg>

          <PreloadImg className="preload-image-hidden" src="/static/images/Detalles1/1358c9b-1500.jpg"></PreloadImg>
          <PreloadImg className="preload-image-hidden" src="/static/images/Detalles1/37966b6-1000.jpg"></PreloadImg>
          <PreloadImg className="preload-image-hidden" src="/static/images/Detalles1/07fa4ad-1000.jpg"></PreloadImg>
          <PreloadImg className="preload-image-hidden" src="/static/images/Detalles1/8d6db96-1500.jpg"></PreloadImg>
          <PreloadImg className="preload-image-hidden" src="/static/images/Detalles1/355f115-1000.jpg"></PreloadImg>
          <PreloadImg className="preload-image-hidden" src="/static/images/Detalles1/7d7650d-1500.jpg"></PreloadImg>


          <PreloadImg className="preload-image-hidden" src="/static/images/Detalle2/96e5535-720.jpg"></PreloadImg>

          

        
        
        
        
        
        

          {/** First run the animatedLogo, then show Home */}
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