import styled from 'styled-components';

const TitleLogo = styled.p`
font-size: ${({ theme }) => theme.fonts.h1.size};
color: ${({ theme }) => theme.fonts.h1.color};
margin: 0;
font-weight: 200;
`

export default TitleLogo;