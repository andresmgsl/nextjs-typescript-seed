import  styled, { createGlobalStyle } from 'styled-components';
import { Subtitle } from '@utils/styled-components/index';

const NewTitle = styled(Subtitle).attrs({
    'aria-label': 'Logo',
})`
    text-align: center;
    font-weight: 500;   
`
  
const AnimatedLogoStyle = createGlobalStyle`

    .subtitle-box,
    .title-box {
        display: block;
        position: relative;
        height: 50px;
        width: 220px;
        margin: 0 auto;
    }

    .title-box {
        height: 50px;
    }
    .subtitle-box {
        height: 25px;
    }

    #animated-logo {
        position: relative;
        width: 230px;
        height: 50px;
    }

`

export {NewTitle, AnimatedLogoStyle}