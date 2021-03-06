import styled from 'styled-components';

const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.h3.size};
  color: ${({ theme }) => theme.colors.default};
  margin: 0;
`

export { Subtitle };