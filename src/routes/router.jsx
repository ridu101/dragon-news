import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layout/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
        element:<CategoryNews></CategoryNews>
      }
     
    ]
  },
  {
    path: "/auth",
    element: <h2>Auth</h2>,
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
