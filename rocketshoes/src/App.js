import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalStyles from './styles/global';
import Header from './components/Header/index';
import Routes from './routes';

import history from './services/history';
import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        {/* // router-dom ta ouvindo as informaçoes no history qual alteraçao ele pega */}
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
