import styled from "styled-components";

interface IProps {
  name?: string;
}

const Nav = styled.nav`
    color: white;
    display: flex;
    padding: 5px;
`
const NavOpt = styled.div`
    display: flex;

    div {
       margin: 0 10px;
    }
`

const Spacer = styled.div`
    flex: 1;
`


function Navbar({}: IProps) {
    return (
        <Nav>
            <div>Aluxion Labs</div>
            <Spacer></Spacer>
            <NavOpt>
                <div>Projects</div>
                <div>About</div>
            </NavOpt>
        </Nav>
    )
} 

export default Navbar;