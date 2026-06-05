import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../App';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';
import AppDetails from '../Pages/AppDetails/AppDetails';
import InstallationApp from '../Pages/InstallationApp/InstallationApp';
import Contact from '../Pages/Contact/Contact';
import BayNaw from '../Pages/BayNaw/BayNaw';
import Login from '../Pages/Login/Login';

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
        loader: ()=>fetch('/App.json'),
        Component: AppDetails
      },
      {
        path: '/InstallationApp',
        loader: ()=>fetch('/App.json'),
        Component: InstallationApp
      },
      {
        path: '/contact',
        Component: Contact
      },
      {
        path: '/baynaw/:id',
        Component: BayNaw,
        loader: ()=>fetch('/App.json')
      },
      {
        path: '/login',
        Component: Login,
        loader: ()=>fetch('/App.json')
      }
    ]
  },
]);