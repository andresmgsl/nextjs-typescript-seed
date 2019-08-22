import styled from 'styled-components';

const Buttonlux = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.default};
`

export default Buttonlux;