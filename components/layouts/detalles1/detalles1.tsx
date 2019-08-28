import React from 'react';

import Navbar from '@utils/navbar/navbar';
import detailEnterAnimation from '@utils/animations/detailsEnter';

import DetailNavbar from './navbar/navbar';
import DetailFooter from './footer/footer';

import { MiddleBox, 
        DetallesContainer, 
        BigText, 
        BasicContainerInst, 
        ImageContainerInst, 
        TranspartenBoxStyle, 
        CustomMiddleBoxStyle 
      } from './utils';


class Detalles1 extends React.Component {

  componentDidMount() {

    detailEnterAnimation('#detalles1-main', '#detalles1-layout', '#detalles1-container');

  }

  render() {    
    return (
        <DetallesContainer id="detalles1-main">
          <Navbar hamburColor="black"/>
          <div id='detalles1-container'>
            <div id="detalles1-layout">
              {/** This is for avoid "freeze scroll" when hover a fixed element (BigText Duox) */}
              <div id="transparent-box" style={TranspartenBoxStyle}></div>
              
              <BigText>Duox</BigText>
              
              <DetailNavbar></DetailNavbar>

              <BasicContainerInst>
                <ImageContainerInst>
                  <img src="/static/images/Detalle1/1358c9b-1500.jpg"></img>
                </ImageContainerInst>

                <MiddleBox>
                  <ImageContainerInst id="image-1" className="first">
                    <img src="/static/images/Detalle1/37966b6-1000.jpg"></img>
                  </ImageContainerInst>

                  <ImageContainerInst id="image-2" className="second">
                    <img src="/static/images/Detalle1/07fa4ad-1000.jpg"></img>
                  </ImageContainerInst>

                </MiddleBox>

                <MiddleBox style={CustomMiddleBoxStyle}>
                  <ImageContainerInst id="image-3" className="first">
                    <img src="/static/images/Detalle1/8d6db96-1500.jpg"></img>
                  </ImageContainerInst>

                  <ImageContainerInst id="image-4" className="second">
                    <img src="/static/images/Detalle1/355f115-1000.jpg"></img>
                  </ImageContainerInst>
                </MiddleBox>

                <ImageContainerInst>
                  <img src="/static/images/Detalle1/7d7650d-1500.jpg"></img>
                </ImageContainerInst>


              </BasicContainerInst>
              <DetailFooter></DetailFooter>
            </div>
          </div>
        </DetallesContainer>
    )
  }
}

export default Detalles1;