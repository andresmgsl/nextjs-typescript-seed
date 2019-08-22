import styled from "styled-components";
import FlexSpacer from "@utils/styled-components/flexSpacer"


interface IProps {
  name?: string;
}

const Nav = styled.nav`
    color: white;
    display: flex;
    padding: 20px 30px;
    postion: fixed;

    span {
        font-size: 19px;
    }
`
const NavOpt = styled.div`
    display: flex;

    div {
       margin: 0 15px;
    }

    .last {
        margin-right:0px;
    }

`



function Navbar({}: IProps) {
    return (
        <Nav>
            <div>
                <span>
                    Aluxion Labs
                </span>
            </div>
            <FlexSpacer></FlexSpacer>
            <NavOpt>
                <div>
                    <span>
                        Projects
                    </span>
                </div>
                <div className="last">
                    <span>
                        About
                    </span>
                </div>
            </NavOpt>
        </Nav>
    )
} 

export default Navbar;