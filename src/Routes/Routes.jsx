import {
  createBrowserRouter

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import PetListing from "../Pages/PetListing/PetListing";
import Login from "../Pages/Shared/Login/Login";
import PetDetails from "../Pages/PetListing/PetDetails";
import PrivateRoute from "./PrivateRoute";
import Campaign from "../Pages/DonationCampaign/Campaign";
import DonationDetails from "../Pages/DonationCampaign/DonationDetails";
import Register from "../Pages/Shared/Register/Register";

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

      },
      {
        path: '/displayPet/:id',
        element: <PrivateRoute><PetDetails></PetDetails></PrivateRoute>,
        
    },
    {
      path: '/DonationCampaigns',
      element: <Campaign></Campaign>
    },
    {
      path: '/displayCampaign/:id',
      element: <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
      
  },
  {
    path: '/register',
    element: <Register></Register>

}
    ]
  },
]);