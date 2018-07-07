import { injectGlobal } from 'styled-components';

injectGlobal([`
  html {
    height: 100%;
    width: 100%;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`]);
