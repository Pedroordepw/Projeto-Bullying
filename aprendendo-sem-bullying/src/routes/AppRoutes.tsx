import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RoutesBase from "./RoutesBase"
import Home from "../pages/Home"
import Effects from "../pages/Effects"
import Types from "../pages/Types"
import Signs from "../pages/Signs"
import Prevention from "../pages/Prevention"
import Legislation from "../pages/Legislation"
import Intervention from "../pages/Intervention"

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
                },
                {
                    path: "/sinais",
                    element: <Signs/>
                },
                {
                    path: "/prevencao",
                    element: <Prevention/>
                },
                {
                    path: "/legislacao",
                    element: <Legislation/>
                },
                {
                    path: "/intervencao",
                    element: <Intervention/>
                }                
            ]
        }
    ])
  return (
     <RouterProvider router={router}/>
  )
}

export default AppRoutes