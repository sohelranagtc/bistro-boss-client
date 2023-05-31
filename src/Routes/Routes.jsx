import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secrect from "../Secrect";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";

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
        },
        {
          path : "/signup",
          element : <SignUp></SignUp>
        },
        {
          path : "/secrect",
          element: <PrivateRoute><Secrect></Secrect></PrivateRoute>
        }
      ]
    },
    {
      path : "dashboard",
      element : <DashBoard></DashBoard>,
      children : [
        {
          path : "mycart",
          element : <MyCart></MyCart>
        },
        {
          path : "allusers",
          element : <AllUsers></AllUsers>
        }
      ]
    }
  ]);