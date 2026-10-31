import React from 'react'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Homepages from '../pages/Homepages'
import MyAccount from '../pages/MyAccount'
import Shop from '../pages/Shop'
import Navbar from '../components/Navbar'
import Foot from '../components/Foot'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cart from '../pages/Cart'


const main = createBrowserRouter([
    {
        path: '/',
        element: <Navbar />,
        children: [
            {
                path: '/',
                element: <Homepages />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/myaccount',
                element: <MyAccount />
            },
            {
                path: '/cart',
                element: <Cart />
            },
        ]
    }
])

const Pages = () => {
    return (
        <>
            <RouterProvider router={main}>

            </RouterProvider>
        </>
    )
}

export default Pages
