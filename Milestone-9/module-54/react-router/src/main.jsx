import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './Components/About/About';
import Header from './Components/Header/Header';
 const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>
  },
  {
    path:'/About',
    element:<About></About>
  },
  {
    path:'/Product',
    element:<div>This is Product</div>
  }
 ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
