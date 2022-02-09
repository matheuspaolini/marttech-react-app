import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import AppProvider from 'context/App';
import AuthProvider from 'context/Auth';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
