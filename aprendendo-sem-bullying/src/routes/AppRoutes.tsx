import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RoutesBase from "./RoutesBase"
import Home from "../pages/Home"
import Effects from "../pages/Effects"
import Types from "../pages/Types"

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            element: <RoutesBase/>,
            children: [
                {
                    path: "/",
                    element: <Home/>,
                
                },
                {
                    path: "/efeitos",
                    element: <Effects/>
                },
                {
                    path: "/tipos",
                    element: <Types/>
                }
                
            ]
        }
    ])
  return (
     <RouterProvider router={router}/>
  )
}

export default AppRoutes