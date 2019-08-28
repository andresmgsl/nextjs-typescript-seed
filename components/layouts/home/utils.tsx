import styled from 'styled-components';


const BigTitleLogo = styled.div`
  margin-bottom: 45px;

  @media ${({ theme }) => theme.device.mobileS} { 
    font-size: 60px;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    font-size: 80px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 115px;
  }

`
const ShowImageBox = styled.div`
  width: 430px;
  height: 300px;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-size: cover;

  @media ${({ theme }) => theme.device.mobileS} { 
    width: 340px;
    height: 260px;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    width: 360px;
    height: 270px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 430px;
    height: 300px;
  }

`

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  position: relative;

  #home-container {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  #home-opts-container {
    margin-top: 75%;
  }

  [id^="home-main-image-container"] {
    opacity: 0;
  }

  [id^="home-main-image-container"].portrait {
    height: 430px;
    width: 300px;
  }


  @media ${({ theme }) => theme.device.mobileS} { 
    #home-opts-container {
      margin-top: 70%;
    }

    [id^="home-main-image-container"].portrait {
      height: 320px;
      width: 240px;
    }

  }

  @media ${({ theme }) => theme.device.mobileM} {
    #home-opts-container {
      margin-top: 50%;
    }
  }

  @media ${({ theme }) => theme.device.mobileL} {
    #home-opts-container {
      margin-top: 35%;
    }

    [id^="home-main-image-container"].portrait {
      height: 360px;
      width: 270px;
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    #home-opts-container {
      margin-top: 15%;
    }

    [id^="home-main-image-container"].portrait {
      height: 430px;
      width: 300px;
    }
  }
`

export { BigTitleLogo, ShowImageBox, HomeContainer }