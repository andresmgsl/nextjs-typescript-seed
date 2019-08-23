import styled from "styled-components";


const HamburgerContainer = styled.div`
    cursor: pointer;
    
    div.body-bar {
        width: 20px;
        height: 2px;
        margin: 4px 0;
        opacity: 0.8;
    }
    
`

interface IProps {
    color?: string;
}


function HamburgerIcon({ color }: IProps) {

    return (
        <HamburgerContainer >
            <div className="body-bar" style={{ backgroundColor: color }}></div>
            <div className="body-bar" style={{ backgroundColor: color }}></div>
            <div className="body-bar" style={{ backgroundColor: color }}></div>
        </HamburgerContainer>
    )
}

export default HamburgerIcon;