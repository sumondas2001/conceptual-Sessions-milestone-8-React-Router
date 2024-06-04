import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Products from "../Products/Products";
import Home from "../Home/Home";
import ProductDetails from "../ProductDetails/ProductDetails";
import DashBoardLayout from "../DashboardLayout/DashBoardLayout/DashBoardLayout";
import DashBoard from "../DashboardLayout/DashBoard/DashBoard";
import About from "../DashboardLayout/About/About";
import Profile from "../DashboardLayout/Profile/Profile";
import AddToCart from "../DashboardLayout/AddToCart/AddToCart";









const router = createBrowserRouter([
     {
          path: "/",
          element: <MainLayout></MainLayout>,
          children: [
               {
                    path: "/",
                    element: <Home></Home>
               },
               {
                    path: "/products",
                    element: <Products></Products>,
                    loader: () => fetch('https://dummyjson.com/products')

               },
               {
                    path: "/product/:id",
                    element: <ProductDetails></ProductDetails>,
                    loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`)


               },
               {
                    path: "/dashboard",
                    element: <DashBoardLayout></DashBoardLayout>,
                    children: [
                         {
                              path: "/dashboard",
                              element: <DashBoard></DashBoard>
                         },
                         {
                              path: '/dashboard/about',
                              element: <About></About>

                         },
                         {
                              path: '/dashboard/profile',
                              element: <Profile></Profile>
                         },
                         {
                              path: '/dashboard/addtocart',
                              element: <AddToCart></AddToCart>
                         }

                    ]
               }



          ]
     }
])

export default router;