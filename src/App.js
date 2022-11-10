import './App.css'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import 'react-photo-view/dist/react-photo-view.css'

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
