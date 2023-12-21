import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Home } from 'pages/home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<RouterProvider router={router} />)
