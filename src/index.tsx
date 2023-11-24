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
import Mail from './routes/Mail';
import Mailbox from './routes/Mailbox';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "sent",
        element: <Mailbox name='Sent'/>,
        children: [
          {
            path: ":id",
            element: <Mail />,
          }
        ]
      },
      {
        path: "inbox",
        element: <Mailbox name='Inbox'/>,
        children: [
          {
            path: ":id",
            element: <Mail />
          }
        ]
      },
      {
        path: "draft",
        element: <Mailbox name='Draft'/>,
        children: [
          {
            path: ":id",
            element: <Mail />
          }
        ]
      },
      {
        path: "delete",
        element: <Mailbox name='Delete'/>,
        children: [
          {
            path: ":id",
            element: <Mail />
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
