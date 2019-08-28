import styled from "styled-components";

const Footer = styled.footer`
    width: 100%;
    position: relative;
    cursor: pointer;
    height: 600px;
    z-index: 50;
    margin-top: 100px;
    background-color: ${({ theme }) => theme.colors.background};
`

const FooterBody = styled.div`
    width: 400px;

    #footer-back-image {
        opacity: 0.6;
    }

    p {
        font-size: 22px;
        color: white;
        margin: 0;
        margin-top: 10px;
    }

    @media ${({ theme }) => theme.device.mobileS} { 
        #footer-back-image {
            margin-top:20px;
        }
    }

    @media ${({ theme }) => theme.device.mobileM} { 
        #footer-back-image {
            margin-top:40px;
        }
    }

    @media ${({ theme }) => theme.device.mobileL} {
        #footer-back-image {
            margin-top:60px;
        }
    }

    @media ${({ theme }) => theme.device.tablet} {
        #footer-back-image {
            margin-top:100px;
        }
    }    
`

const BigText = styled.div`
  width: 100%;
  z-index: 1;
  padding: 0 20px;
  position: absolute;
  opacity: 0.65;
  color: white;

  @media ${({ theme }) => theme.device.mobileS} { 
    
  }

  @media ${({ theme }) => theme.device.mobileM} { 
    
  }

  @media ${({ theme }) => theme.device.mobileL} {
    
  }

  @media ${({ theme }) => theme.device.tablet} {
    
  }  

  .title-footer-box {
      display: block;
      position: relative;
      height: 190px;
      width: 650px;
      margin: 0 auto;
      cursor: pointer;
  }


  #animated-footer-title {
    position: relative;
    height: 190px;
    width: 650px;
    top: 0px;
}

`
export { Footer, FooterBody, BigText }