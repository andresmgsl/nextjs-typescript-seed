import React from 'react';
import styled from 'styled-components';

import Navbar from '@utils/navbar/navbar';

declare var TimelineMax: any;
declare var Power3: any;


const H5T = styled.h5`
    color: white;
    font-size: 25px;
    font-weight: 200;
`

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`

class Home extends React.Component {
  ejemplo: string = ' ';

  componentDidMount() {
    let tl = new TimelineMax({});
   
    tl.from('#home-container',.7, {ease: Power3.easeInOut, y: 40, opacity:0}, 0);
  }

  render() {    
    return (
        <HomeContainer>
          <div id='home-container'>
            <Navbar />
            <H5T>{this.ejemplo}</H5T>
          </div>
        </HomeContainer>
    )
  }
}

export default Home;