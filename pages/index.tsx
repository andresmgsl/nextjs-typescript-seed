import React from 'react';
import styled from 'styled-components';
import { Title, Subtitle } from '../utils/styled-components';

const MainTitle = styled(Title)`
  background-color: ${({ theme }) => theme.colors.primary}
`

const MainSubtitle = Subtitle

console.log(Title);

export default class extends React.Component {
  render() {    
    return (
      <div>
        <MainTitle>Hola mundo</MainTitle>
        
        <MainSubtitle>Este es un seed inicial de NextJs con TypeScript..</MainSubtitle>
      </div>
    )
  }
}