import Cart from 'components/Cart';

import StylesProvider from 'styles/global';

import AppRoutes from 'routes/AppRoutes';

export default function App() {
  return (
    <>
      <StylesProvider />
      <AppRoutes />
      <Cart />
    </>
  );
}
