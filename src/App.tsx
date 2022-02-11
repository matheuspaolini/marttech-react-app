import Cart from 'components/Cart';

import StylesProvider from 'styles/global';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'routes/AppRoutes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <StylesProvider />

        <ToastContainer
          theme="dark"
          limit={3}
          autoClose={3000}
          position="bottom-center"
        />

        <AppRoutes />
        <Cart />
      </BrowserRouter>
    </>
  );
}
