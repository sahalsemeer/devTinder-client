import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Body from './components/Body'
import Feed from './components/Feed'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  const router = createBrowserRouter([
   {
    path:'/',
    element:<Body />,
    children:[
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/profile',
        element:<Profile />
      },
      {
        path:'/feed',
        element:<Feed />
      }
     
    ]
   }  
  ])
  return <RouterProvider router={router} />
  
}

export default App