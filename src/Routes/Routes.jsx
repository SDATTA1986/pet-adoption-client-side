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
import ErrorPage from "../Pages/Shared/Category/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import AddPet from "../Pages/Dashboard/AddPet/AddPet";
import MyPet from "../Pages/Dashboard/MyPet/MyPet";

import UpdatePet from "../Pages/Dashboard/UpdatePet/UpdatePet";
import CreateCampaign from "../Pages/DonationCampaign/CreateCampaign";
import SearchCategory from "../Pages/Shared/Category/SearchCategory";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: '/category/:name',
        element: <SearchCategory></SearchCategory>,
        loader: () => fetch('https://pet-adoption-server-side-iota.vercel.app/Pet')
        
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

      },
      {
        
        path:'UpdatePet/:id',
        element:<PrivateRoute><UpdatePet></UpdatePet></PrivateRoute>,
        loader:({params})=>fetch(`https://pet-adoption-server-side-iota.vercel.app/Pet/${params.id}`)
      
    }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'addPet',
        element:<PrivateRoute><AddPet></AddPet></PrivateRoute>
      },
      {
        path:'MyPet',
        element:<PrivateRoute><MyPet></MyPet></PrivateRoute>,
        loader: ()=>fetch('https://pet-adoption-server-side-iota.vercel.app/pet')
      },
      {
        path:'createCampaign',
        element:<PrivateRoute><CreateCampaign></CreateCampaign></PrivateRoute>
      },
      {
        path:'users',
        element:<AllUsers></AllUsers>
      }
    ]
  }
]);