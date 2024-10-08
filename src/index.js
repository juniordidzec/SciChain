import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import UserPostPage from './pages/userPostPage/UserPostPage';
import UserReviewPage from './pages/userReviewPage/UserReviewPage';
import CategoryPage from './pages/categoryPage/CategoryPage';
import ErrorPage from './pages/errorPage/ErrorPage';

const router = createBrowserRouter([
{
  path: "/",
  element: <HomePage/> 
},
{
  path: "/send",
  element: <UserPostPage/> 
},
{
  path: "/review",
  element: <UserReviewPage/> 
},
{
  path: "/category/:id",
  element: <CategoryPage/> 
},
{
  errorElement: <ErrorPage/>
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
