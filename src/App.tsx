import Home from 'pages/Home';

import Cart from 'components/Cart';

import StylesProvider from 'styles/global';
import Login from 'pages/Login';
import Register from 'pages/Register';

export default function App() {
  return (
    <>
      <StylesProvider />
      
      <Register />

      <Cart />
    </>
  );
}
