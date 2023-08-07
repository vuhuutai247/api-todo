import { createBrowserRouter } from "react-router-dom";
import Todolist from "./Todolists";
import MainLayout from "./views/layouts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: 'Todolist',
                element:<Todolist />
            }
        ]
    }
])

export default router