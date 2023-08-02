import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Layout from './components/Layout/Layout';
import Forms from './components/Forms/Forms';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/register-rb',
        element:<Forms></Forms>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
