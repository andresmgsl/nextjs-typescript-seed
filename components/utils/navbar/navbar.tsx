import styled from "styled-components";
import FlexSpacer from "@utils/styled-components/flexSpacer"
import Link from 'next/link';

interface IProps {
  name?: string;
}

const Nav = styled.nav`
    display: flex;
    padding: 20px 30px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    
    span {
        font-size: 20px;
        cursor: pointer;
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
                <Link href="/">
                    <span>
                        Aluxion Labs
                    </span>
                </Link>
            </div>
            <FlexSpacer></FlexSpacer>
            <NavOpt>
                <div>
                    <Link href="/detalles1">
                        <span>
                            Projects
                        </span> 
                    </Link>
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