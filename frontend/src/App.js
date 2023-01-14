import {RouterProvider,createBrowserRouter, Outlet} from "react-router-dom"
import { Footer, Header, NavBar } from "./components";
import { Cart, HomeContainer, Login, NotFound, Payment, PlaceOrder, ProductDetails,Profile, Shipping } from "./pages";

const Layout=()=>{
  return (
     <>
     <NavBar/>
     <Header/>
     <Outlet/>
     <Footer/>
     </>
  )
}

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<HomeContainer/>
      },
      {
        path:"/product/:id",
        element:<ProductDetails/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/placeorder",
        element:<PlaceOrder/>
      },
      { 
        path:"/shipping",
        element:<Shipping/>
      },
      {
        path:"/payment",
        element:<Payment/>
      },
      {
        path:"/order",
        element:<PlaceOrder confirmed/>
      },
      {
        path:"*",
        element:<NotFound/>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
