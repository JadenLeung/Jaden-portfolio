import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './pages/App.jsx';
import Resume from './pages/Resume.jsx';
import './index.css';

import "@fontsource/outfit";
import "@fontsource/roboto";

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "resume",
    element: <Resume/>,
  },
]);*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
);

//    <RouterProvider router={router}  />