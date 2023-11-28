import {
  createBrowserRouter

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import PetListing from "../Pages/PetListing/PetListing";
import Login from "../Pages/Shared/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/PetListing',
        element: <PetListing></PetListing>
      },
      {
        path: '/login',
        element: <Login></Login>

      }
    ]
  },
]);