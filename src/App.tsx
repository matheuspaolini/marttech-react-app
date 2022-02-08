import Cart from 'components/Cart';
import Header from 'components/Header';
import StylesProvider from 'styles/global';

export default function App() {
  return (
    <>
      <StylesProvider />
      <Header />

      <Cart />
    </>
  );
}
