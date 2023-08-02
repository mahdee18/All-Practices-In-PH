import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './assets/components/Header/Header';
import Countries from './assets/components/restCountries/Countries';

const router=createBrowserRouter([
  {
    path:'/',
    element: <Header></Header>
  },
  {
    path:'/about',
    element:<div>This is About Section!</div>
  },
  {
    path:'/product',
    element:<div>This is product Section!!</div>
  },
  {
    path:'/countries',
    element:<Countries></Countries>,
    loader: ()=>fetch('https://restcountries.com/v3.1/all')
  },
])
// {
//   path:'/countries/:countryId',
//   element:<Countries></Countries>,
//   loader: ({params})=>(`https://restcountries.com/v3.1/${params.countryId}`)

// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
