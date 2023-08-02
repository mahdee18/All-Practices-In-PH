import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Home from './components/Home.jsx';
import AuthProviders from './components/Providers/AuthProviders.jsx';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes.jsx';
import Orders from './components/Orders.jsx';
import Profile from './components/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/orders',
        element: <ProtectedRoutes><Orders></Orders></ProtectedRoutes>
      },
      {
        path: '/profile',
        element: <ProtectedRoutes><Profile></Profile></ProtectedRoutes>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
