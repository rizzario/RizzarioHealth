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
import ErrorPage from './pages/error/error-page';
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
import Index from './pages/index';
import NavigationHeader, {
  // loader as navigationLoader,
} from './components/layout/NavigationHeader';

const ToppickBanner = React.lazy(() => import("./components/layout/ToppickCarousel"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      index
      element={
        <React.Suspense fallback={<>...</>}>
          <Index />
        </React.Suspense>
      }
      errorElement={<ErrorPage />}
    >

    </Route>
  )
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route
//         path='/'
//         element={<NavigationHeader />}
//         // loader={navigationLoader}
//         errorElement={<ErrorPage />}
//       >
//         <Route 
//           errorElement={<ErrorPage />}
//         >
//           <Route 
//             path='/'
//             element={<ToppickBanner />}
//           >
//             <Route
//               path='/'
//               element={<Index />}
//             />
//           </Route>
          
          {/* <Route
            path='/'
            element={<Addnew />}
            loader={addnewLoader}
            action={addnewAction}
            errorElement={<ErrorPage />}
          >
            <Route errorElement={<ErrorPage />}>
              <Route
                index='true'
                element={<Index />}
              />
              <Route
                path='contacts/:contactId'
                element={<Contact />}
                loader={contactLoader}
                action={contactAction}
              />
              <Route
                path='contacts/:contactId/edit'
                element={<EditContact />}
                loader={contactLoader}
                action={editAction}
              />
              <Route
                path='contacts/:contactId/destroy'
                action={destroyAction}
              />
            </Route>
          </Route> */}
//          </Route>
//        </Route>
//      </>
//    )
//  );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)