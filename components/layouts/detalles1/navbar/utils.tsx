import styled from "styled-components";


const Nav = styled.nav`
    display: flex;
    padding: 20px 30px;
    width: 100%;
    z-index: 10;
    color: black;
    justify-content: center;
    margin-bottom:10px;
    padding-top: 0px;
    position: relative;

    span {
        font-size: 22px;
    }

    @media ${({ theme }) => theme.device.mobileS} { 
        margin-bottom:20px;
    }

    @media ${({ theme }) => theme.device.mobileM} { 
        margin-bottom:30px;
    }

    @media ${({ theme }) => theme.device.mobileL} {
        margin-bottom:40px;
    }

    @media ${({ theme }) => theme.device.tablet} {
        margin-bottom:50px;
    }

`
const NavOpt = styled.div`
    display: flex;
    justify-content: center;
    
`
export { Nav, NavOpt }