import React from 'react';

import Navbar from '@utils/navbar/navbar';
import detailEnterAnimation from '@utils/animations/detailsEnter';

import DetailFooter from './footer';
import { DetallesContainer, BigText } from './utils';


class Detalles2 extends React.Component {

  componentDidMount() {

    detailEnterAnimation('#detalles2-main', '#detalles2-layout', '#detalles2-container');

  }

  render() {    
    return (
        <DetallesContainer id="detalles2-main">
          <Navbar hamburColor="black"/>
          <div id='detalles2-container'>
            <div id="detalles2-layout">
             
              <BigText>Drake</BigText>
              
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              
              <DetailFooter></DetailFooter>
            </div>
          </div>
        </DetallesContainer>
    )
  }
}

export default Detalles2;