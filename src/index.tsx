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
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DeleteBox from './routes/DeleteBox';
import Draft from './routes/Draft';
import SearchBox from './routes/SearchBox';

async function loader({ request }: { request: any}) {
  const url = new URL(request.url);
  const filter = {
    in: url.searchParams.get("in"),
    from: url.searchParams.get("from"),
    to: url.searchParams.get("to"),
    subject: url.searchParams.get("subject"),
    keywords: url.searchParams.get("keywords"),
    fromDate: url.searchParams.get("from-date"),
    toDate: url.searchParams.get("to-date"),
  };
  return filter;
}

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
            element: <Draft />
          }
        ]
      },
      {
        path: "deleted",
        element: <DeleteBox />,
        children: [
          {
            path: ":id",
            element: <Mail />
          }
        ]
      },
      {
        path: "search",
        element: <SearchBox />,
        loader: loader,
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
