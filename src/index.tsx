import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Error from './routes/Error';
import Sent from './routes/Sent';
import Mail from './routes/Mail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "sent",
        element: <Sent />,
        children: [
          {
            path: ":id",
            element: <Mail />,
          }
        ]
      }
    ]
  },
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
