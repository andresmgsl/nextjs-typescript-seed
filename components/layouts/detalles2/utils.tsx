// This file was created to be an abstraction layer of
// all the specific components used in the curren component/layout/xxx folder.


import styled from 'styled-components';
import { TitleLogo } from '@utils/styled-components/index';


const DetallesContainer = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  
  
  #detalles2-container {
    overflow: hidden;
    width: 100%;
    height: 100%;      

    background-color: white;
  }

  #detalles2-layout {
    text-align: center;
    margin: 0 auto;
    left: 0;
    right: 0;
    margin-top: 10px;
  }


`

const BigText = styled(TitleLogo)`
  font-size: 70px;
  color: ${({ theme }) => theme.colors.lightGray};
  width: 100%;
  z-index: 1;
  padding: 0 20px;

  @media ${({ theme }) => theme.device.mobileS} { 
    font-size: 100px;
  }

  @media ${({ theme }) => theme.device.mobileM} { 
    font-size: 120px;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 180px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 260px;
  } 

`


export {
            DetallesContainer, 
            BigText
        }