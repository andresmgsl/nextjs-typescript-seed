import styled from "styled-components";


const Nav = styled.nav`
    display: flex;
    padding: 20px 30px;
    width: 100%;
    z-index: 10;
    color: black;
    justify-content: center;
    margin-bottom:50px;
    padding-top: 0px;
    position: relative;

    span {
        font-size: 22px;
    }
`
const NavOpt = styled.div`
    display: flex;
    justify-content: center;
    

    div {
       margin: 0 85px;
       display: flex;
       flex-flow: column;
    }
    
    small {
        font-family: "Montserrat";
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.gray};
    }


`

function DetailNavbar() {
    return (
        <Nav>
             <NavOpt>
                <div>
                    <small>
                        prueba
                    </small>
                    <span>
                        Teseo
                    </span> 
                </div>
                <div>
                    <small>
                        prueba
                    </small>
                    <span>
                        Iearus
                    </span>
                </div>
                <div>
                    <small>
                        prueba
                    </small>
                    <span>
                        Perseo
                    </span>
                </div>  
                <div>
                    <small>
                        prueba
                    </small>
                    <span>
                        Jason
                    </span>
                </div> 
                <div>
                    <small>
                        prueba
                    </small>
                    <span>
                        Ulises
                    </span>
                </div>                                                 
            </NavOpt>
        </Nav>
    )
} 

export default DetailNavbar;