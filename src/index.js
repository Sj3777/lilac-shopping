import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import store from '../src/redux/store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

