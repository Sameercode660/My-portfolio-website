import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import App from "../App";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '',
                element: <Home></Home>
            }
            ,
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/projects',
                element: <Project></Project>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
    
])