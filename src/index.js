import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Error from './Error';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainBody from './MainBody';
import ResturantMenu from './ResturatntMenu';
import { Suspense,lazy } from 'react';
const AboutLazy = lazy(() => import('./About'));
const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    // Add nested routes here if needed
    children: [
      // Example of nested route
      { path: "/", element: <MainBody/>},
      {path:'/About',element:<Suspense  fallback={<div>Loading...</div>}><AboutLazy name="Mohd  Jilani" location="Rampur Up 244925" /></Suspense>},
      // { path: "/About", element: <About name="Mohd Asif Jilani" location="Rampur Up 244925" />},
      {path:'/resturant/:resId',element:<ResturantMenu/>}
    ],
    errorElement:<Error/>
  }
  // Additional routes can be added here
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
