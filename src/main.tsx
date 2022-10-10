import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Menu from './components/menu';
import ErrorPage from './pages/error';
import Inicio from './pages/inicio';
import Login from './pages/login';
import './styles/globals.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/inicio",
    element: <Menu />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/inicio/",
        element: <Inicio />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
