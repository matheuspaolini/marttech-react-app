import Home from 'pages/Home';
import Categories from 'pages/Categories';
import Orders from 'pages/Orders';
import Login from 'pages/Login';
import Register from 'pages/Register';

import {
  Routes,
  Route
} from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="categories" element={<Categories />} />
      <Route path="orders" element={<Orders />} />
      <Route path="auth">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}
