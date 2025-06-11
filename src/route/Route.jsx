import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import Login from "../component/Login";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        errorElement:<div className="text-center text-2xl font-bold">404 Not Found</div>,
        children:[
            {
                path: '/Login',
                element:<Login></Login>
            }
        ]
       

    }
])

export default router