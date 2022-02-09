import Home from 'pages/Home';

import Cart from 'components/Cart';

import StylesProvider from 'styles/global';

export default function App() {
  return (
    <>
      <StylesProvider />
      
      <Home />

      <Cart />
    </>
  );
}
