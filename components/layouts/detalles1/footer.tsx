import styled from "styled-components";
import { FlexContainer, ImageContainer, TitleLogo } from '@utils/styled-components/index';

const Footer = styled.footer`
    width: 100%;
    position: relative;
    height: 600px;
    z-index: 50;
    margin-top: 100px;
    background-color: ${({ theme }) => theme.colors.background};
`

const FooterBody = styled.div`
    width: 400px;

    img {
        opacity: 0.6;
        margin-top: 100px;
    }

    p {
        font-size: 22px;
        color: white;
        margin: 0;
        margin-top: 10px;
    }
`

const BigText = styled(TitleLogo)`
  font-size: 300px;
  color: ${({ theme }) => theme.colors.lightGray};
  width: 100%;
  z-index: 1;
  padding: 0 20px;
  position: absolute;
  opacity: 0.2;
`


function DetailFooter() {
    return (
        <Footer>
            <FlexContainer>
                <BigText>
                    Drake
                </BigText>
                <FooterBody>
                    <ImageContainer>
                        <img src="/static/images/Detalle2/96e5535-720.jpg"></img>
                    </ImageContainer>
                    <p>
                        Click & Hold
                    </p>
                </FooterBody>
            </FlexContainer>
        </Footer>
    )
} 

export default DetailFooter;