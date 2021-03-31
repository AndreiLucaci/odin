import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import { MainPage } from './pages';

import './App.css';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainPage />
    </>
  );
};

render(<App />, mainElement);
