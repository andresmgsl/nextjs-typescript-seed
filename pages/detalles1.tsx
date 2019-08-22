import Detalles1 from "@layouts/detalles1/detalles1";
import styled from 'styled-components';

const Detalles1Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AnimatedLogo = () => (
    <Detalles1Container>
        <Detalles1></Detalles1>
    </Detalles1Container>
)

export default AnimatedLogo