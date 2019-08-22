import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};;
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export default MainContainer;