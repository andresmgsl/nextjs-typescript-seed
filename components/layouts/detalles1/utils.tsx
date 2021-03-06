// This file was created to be an abstraction layer of
// all the specific components used in the curren component/layout/xxx folder.
import styled from 'styled-components';
import { TitleLogo, BasicContainer, ImageContainer } from '@utils/styled-components/index';

const MiddleBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  [label='image-container'] {
    
  }

  #image-1.first {
    padding: 0px;

    margin-top: 700px;
    padding-right: 50px;
  }

  #image-2.second {
    padding: 0px;

    margin-top: 130px;
    padding-right: 0px;
    padding-left: 120px;
  }

  #image-3.first {
    flex: 7;
    padding-right: 10px;
  }

  #image-4.second {
    flex: 3;
    padding-left: 10px;
  }


  @media ${({ theme }) => theme.device.mobileS} { 
    margin-bottom:20px;
    #image-1.first {
  
      margin-top: 100px;
      padding-right: 10px;
    }
  
    #image-2.second {
  
      margin-top: 30px;
      padding-right: 0px;
      padding-left: 10px;
    }
  
    #image-3.first {
      flex: 7;
      padding-right: 10px;
    }
  
    #image-4.second {
      flex: 3;
      padding-left: 10px;
    }    
  }

  @media ${({ theme }) => theme.device.mobileM} { 
      margin-bottom:30px;
  }

  @media ${({ theme }) => theme.device.tablet} {
      margin-bottom:40px;
      
      #image-1.first {
        padding: 0px;
    
        margin-top: 700px;
        padding-right: 50px;
      }
    
      #image-2.second {
        padding: 0px;
    
        margin-top: 130px;
        padding-right: 0px;
        padding-left: 120px;
      }
    
      #image-3.first {
        flex: 7;
        padding-right: 10px;
      }
    
      #image-4.second {
        flex: 3;
        padding-left: 10px;
      }      
  }
`

const DetallesContainer = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  
  
  #detalles1-container {
    overflow: hidden;
    width: 100%;
    height: 100%;      

    background-color: white;
  }

  #detalles1-layout {
    text-align: center;
    margin: 0 auto;
    left: 0;
    right: 0;
    margin-top: 10px;
  }



  @media ${({ theme }) => theme.device.mobileS} { 
    #transparent-box {
      height: 220px;
    }
  }

  @media ${({ theme }) => theme.device.laptop} { 
    #transparent-box {
      height: 460px;
    }
  }

`

const BigText = styled(TitleLogo)`
  font-size: 70px;
  color: ${({ theme }) => theme.colors.lightGray};
  top: 100px;
  width: 100%;
  position: fixed;
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

const BasicContainerInst = styled(BasicContainer)`
  margin: 0 auto;
  padding-top: 40px;
  z-index: 10;
`

const ImageContainerInst = styled(ImageContainer)`
  width: 100%;
`

const TranspartenBoxStyle = {
   position: 'relative' as 'relative',
   marginTop: '50px', 
   zIndex: 10, 
   width: '100%'
}

const CustomMiddleBoxStyle = {
  maxHeight: "550px",
  overflow: "hidden",
  marginBottom: "80px",
  height: "100%"
}

export {
            MiddleBox, 
            DetallesContainer, 
            BigText, 
            BasicContainerInst, 
            ImageContainerInst, 
            TranspartenBoxStyle, 
            CustomMiddleBoxStyle
        }