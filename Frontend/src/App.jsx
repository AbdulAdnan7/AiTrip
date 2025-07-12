import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from './components/Navbar'

function App() {

   const route = createBrowserRouter([
    {
    path: '/',
    element: <div>
      <Navbar />
      <Home />
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
