import './App.css'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'

function App() {
  return (
    <div data-theme="light" className="container mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
