import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css';

import Addnew, { 
  loader as addnewLoader,
  action as addnewAction, 
} from "./routes/addnew";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from './pages/contact/contact';
import EditContact, {
  action as editAction,
} from './pages/contact/edit';
import { 
  action as destroyAction
} from "./pages/contact/destroy";

import Root from "./routes/root";
import ErrorPage from './pages/error/error-page';
import Index from './pages/index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/RizzarioHealth'
      element={<Root />}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route
          index
          element={<Index />}
        >
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)