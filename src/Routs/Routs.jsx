import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../App';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';
import AppDetails from '../Pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path:"/",
        Component: Home
      },
      {
        path: "/AllApps",
        Component: AllApps
      },
      {
        path: '/AppDetails/:id',
        loader: ()=>fetch('App.json'),
        Component: AppDetails
      }
    ]
  },
]);