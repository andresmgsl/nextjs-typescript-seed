import React from 'react';
import AnimatedLogo from "@utils/logo/animatedLogo";
import Home from "@layouts/home/home";
import styled from 'styled-components';

declare var TimelineMax: any;
declare var Power2: any;

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

  componentDidMount() {
    let tl = new TimelineMax({});

    tl.from('#main-index-container',.7, {ease: Power2.easeInOut, backgroundColor: 'white'}, 0);
  }

  showHome = (): void => {
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
          
         {this.state.showAnimatedLogo && <AnimatedLogo 
                                            lgTitle={title} 
                                            lgSubTitle={subTitle}
                                            notifyNotificationEnd={this.showHome}>
                                          </AnimatedLogo> }

          {!this.state.showAnimatedLogo && <Home></Home>}
        </IndexContainer>
    )
  }
}

export default Index;