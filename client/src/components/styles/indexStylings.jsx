import styled, { injectGlobal } from 'styled-components';
import bgImg from '../../../public/icons/bg.jpg';

export default injectGlobal([`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
  }
`]);

export const Background = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    rgba(14,100,99,.75),
    rgba(14,100,99,.75)
  ), 
  url(${bgImg});
  background-size: 40%;
  background-repeat: repeat-x;
  background-position: bottom;
  display: flex;
  align-items: center;
  justify-content: center;
`;
