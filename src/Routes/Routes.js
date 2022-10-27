import { createBrowserRouter } from "react-router-dom";
import Custom from "../layouts/Custom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Details from "../pages/Shared/Details/Details";
import Topic from "../pages/Shared/Topic/Topic";

export const router = createBrowserRouter([
    
    {
        path:'/courses',
        element: <Main></Main>,
        children: [
            {
                path:'/courses',
                loader:() => fetch('http://localhost:5000/'),
                element:<Courses></Courses>
            },
            {
                path:'/courses/:id',
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`),
                element:<Topic></Topic>
            },
            {
                path:'/courses/topics/:id',
                loader: ({params}) => fetch(`http://localhost:5000/topics/${params.id}`),
                element:<Details></Details>
            }
        ]
    },
    {
        path:'/',
        element:<Custom></Custom>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            }
        ]
    }
    
])