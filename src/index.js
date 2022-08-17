import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Theme from './Theme';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
    <App />
  </StrictMode>,
  document.getElementById('root')
);
