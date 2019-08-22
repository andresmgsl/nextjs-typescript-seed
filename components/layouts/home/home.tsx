import React from 'react';
import styled from 'styled-components';

import Navbar from '@utils/navbar/navbar';

declare var TimelineMax: any;
declare var Power3: any;



const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
`


class Home extends React.Component {

  componentDidMount() {
    let tl = new TimelineMax({});
   
    tl.from('#home-container',.7, {ease: Power3.easeInOut, opacity:0}, 0);
  }

  render() {    
    return (
        <HomeContainer>
          <div id='home-container'>
            <Navbar />
          </div>
        </HomeContainer>
    )
  }
}

export default Home;