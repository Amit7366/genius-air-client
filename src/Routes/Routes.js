import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Topic from "../pages/Shared/Topic/Topic";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Home></Home>
    },
    {
        path:'/courses',
        element: <Main></Main>,
        children: [
            {
                path:'/courses/:id',
                element:<Topic></Topic>
            },
            {
                path:'/topics/:id',
                element:<Topic></Topic>
            }
        ]
    },
    {
        path:'/blog',
        element:<Blog></Blog>
    },
    {
        path:'/faq',
        element:<Faq></Faq>
    }
])