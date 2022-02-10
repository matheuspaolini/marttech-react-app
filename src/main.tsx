import React from 'react';
import ReactDOM from 'react-dom';

import AppProvider from 'context/App';
import AuthProvider from 'context/Auth';

import App from 'App';

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
