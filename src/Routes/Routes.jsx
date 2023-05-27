import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
          path : "/menu",
          element : <Menu></Menu>
        },
        {
          path : "/shop/:category",
          element : <Shop></Shop>
        },
        {
          path : "/login",
          element : <Login></Login>
        }
      ]
    },
  ]);