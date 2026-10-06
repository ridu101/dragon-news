import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layout/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
           
        path:'/category/:id',
        element:<CategoryNews></CategoryNews>,
        loader: ()=>fetch("/news.json")
      }
     
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/news",
    element: <h2>News</h2>,
  },
  {
    path: "*",
    element: <h2>Error-404</h2>,
  },
]);

export default router;
