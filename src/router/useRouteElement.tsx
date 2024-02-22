import { useRoutes } from "react-router-dom"
import Login from "../components/Login/Login"
import ChatRoom from "../components/ChatRoom/ChatRoom"

const useRouteElement = ()=> {
    const routeElements = useRoutes([
        {
            path: '/',
            element: <ChatRoom />
        },
        {
            path: '/login',
            element: <Login />
        }
    ])

    return routeElements
}

export default useRouteElement