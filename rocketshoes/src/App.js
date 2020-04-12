import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Header from './components/Header/index';
import Routes from './routes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </div>
  );
}

export default App;
