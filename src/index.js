import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {store, persistor} from './store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <App />
        </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

