import AddPastries from "../../Pages/AddPastries/AddPastries";
import Blogs from "../../Pages/Blogs/Blogs";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import NotFound from "../../Pages/NotFound/NotFound";
import PastryDetails from "../../Pages/PastryDetails/PastryDetails/PastryDetails";
import Pastries from "../../Shared/Pastries/Pastries/Pastries";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/pastries",
        element: <Pastries></Pastries>,
      },

      {
        path: "/blogs",
        loader: () => fetch(`https://pastry-cloud-server.vercel.app/blogs`),
        element: <Blogs></Blogs>,
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addpastries",
        element: (
          <PrivateRoute>
            <AddPastries></AddPastries>
          </PrivateRoute>
        ),
      },
      {
        path: "/pastries/:id",
        loader: ({ params }) => {
          return fetch(
            `https://pastry-cloud-server.vercel.app/pastry/${params.id}`
          );
        },
        element: <PastryDetails></PastryDetails>,
      },
      //   404 =============================================
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
      //   404 =============================================
    ],
  },
]);
export default router;
