import React from 'react';
import AnimatedLogo from "@utils/logo/animatedLogo";
import Home from "@layouts/home/home";
import styled from 'styled-components';


const IndexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IProps {
  name: string;
}
interface IState {
  showAnimatedLogo: boolean;
}

class Index extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = { showAnimatedLogo: true }
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
        <IndexContainer>
          
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