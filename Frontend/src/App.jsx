import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from './components/Navbar'
import Planner from './pages/Planner'
import TripResult from './components/TripResult'

function App() {

   const route = createBrowserRouter([
    {
    path: '/',
    element: <div>
      <Navbar />
      <Home />
    </div>
    },
    {
      path: '/planner',
      element: <div>
        <Navbar />
        <Planner />
      </div>
    },
     {
      path: '/tripresult',
      element: <div>
        <Navbar />
        <TripResult />
      </div>
    }
   ])

  return (
    <>
     <RouterProvider router={route} />
    </>
  )
}

export default App
