import styled from "styled-components";
import Link from 'next/link';

import { FlexSpacer } from '@utils/styled-components/index'
import HamburgerIcon from '@utils/hamburger/hamburger'

const Nav = styled.nav`
    display: flex;
    padding: 20px 30px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    
    span {
        font-size: 20px;
        cursor: pointer;
    }

    #mobile-menu-navigation {
        display: block;
    }

    @media ${({ theme }) => theme.device.tablet} {
        #mobile-menu-navigation {
            display: none;
        }
    }
`
const NavOpt = styled.div`
    display: none;

    div {
       margin: 0 15px;
    }
   
    @media ${({ theme }) => theme.device.tablet} {
        display: flex;

    }

`

interface IProps {
    hamburColor?: string;
}



function Navbar({ hamburColor }: IProps) {
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
            <div style={{ marginTop: "3px" }} id="mobile-menu-navigation">
                <HamburgerIcon color={hamburColor}></HamburgerIcon>
            </div>
            <NavOpt id="normal-menu-navigation">
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