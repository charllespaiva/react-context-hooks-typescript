import styled, { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export const AppContainer = styled.div`
  background: linear-gradient(180deg, ${shade(0.5, '#282828')}, ${shade(1, '#282828')});
  height: 100vh; 
`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: #fffafa;
    min-height: 100vh;
    font-size: 14px;
    color: #fff;
    font-family: sans-serif;
  }
`