import { Subtitle } from '@utils/styled-components/index';
import styled from 'styled-components';
import React from 'react';


const NewTitle = styled(Subtitle).attrs({
  'aria-label': 'Logo',
})`
  text-align: center;
  font-weight: 500;
`

const AnimatedLogo = () => (
    <div>
        <div className="box-container">
            <svg id="demo" xmlns="http://www.w3.org/2000/svg" >
            <defs>
            <clipPath id="theClipPath">
                <rect className="masker" x="0" y="0" width="230" height="50" fill="black" />
            </clipPath>  
            </defs> 
            <rect x="0" y="0" width="230" height="50" fill="none" /> 
            <text textAnchor="middle" x="110" y="40" fontSize="36" fill="#575757">Aluxion Labs</text>
            <rect className="masker" x="0" y="0" width="230" height="50" fill="none" />
            <g id="clipPathReveal" clipPath="url(#theClipPath)">
            <text textAnchor="middle" x="110" y="40" fontSize="36" fill="white">Aluxion Labs</text>
            </g>
            </svg>  

        </div>
        
        <NewTitle className="box-container-2">Agency</NewTitle>
    </div>


)

export default AnimatedLogo