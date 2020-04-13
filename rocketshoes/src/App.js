import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';
import Header from './components/Header/index';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes />
          <GlobalStyles />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
