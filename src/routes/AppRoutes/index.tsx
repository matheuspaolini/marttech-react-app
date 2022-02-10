import Home from 'pages/Home';
import Categories from 'pages/Categories';
import Contact from 'pages/Contact';
import Orders from 'pages/Orders';
import Login from 'pages/Login';
import Register from 'pages/Register';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="contact" element={<Contact />} />
        <Route path="orders" element={<Orders />} />
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
