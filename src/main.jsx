import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chefs from "./Chefs/Chefs.jsx";
import FormLayout from "./FormLayout/FormLayout.jsx";
import LoginForm from "./Login/LoginForm.jsx";
import RegisterForm from "./RegisterForm/RegisterForm.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import SingleRecipe from "./SingleReciipe/SingleRecipe.jsx";
import PrivetRoutes from "./PrivetRoutes/PrivetRoutes.jsx";
import BLog from "./Blog/BLog.jsx";
import Home from "./Home/Home.jsx";
import ErrorPage from "./errorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path : '/chef',
        element : <Chefs></Chefs>
      },
      {
        path : '/blog',
        element : <BLog></BLog>
      },
    ],
  },
  {
    path: "/",
    element: <FormLayout></FormLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/register",
        element: <RegisterForm></RegisterForm>,
      },
      {
        path: "/chef/:id",
        element: <PrivetRoutes><SingleRecipe></SingleRecipe></PrivetRoutes>,
        loader : ({params}) => fetch(`https://assaigment10-server.vercel.app/chefs/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
