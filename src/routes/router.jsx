import { createBrowserRouter } from "react-router";

import HomeLayouts from "../layout/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layout/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../Pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/news-details/:id",
    element: <PrivateRoute>
      <NewsDetails />
    </PrivateRoute>,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement:<Loading></Loading>
  },

  {
    path: "*",
    element: <h2>Error-404</h2>,
  },
]);

export default router;