import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AddReview from '../components/AddReview'
import Blog from '../components/Blog'
import Checkout from '../components/Checkout'
import Home from '../components/Home'
import Login from '../components/Login'
import PageNotFound from '../components/PageNotFound'
import Register from '../components/Register'
import ServiceDetails from '../components/ServiceDetails'
import Services from '../components/Services'
import Main from '../layout/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:8000/services'),
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/services',
        element: <Services></Services>,
      },
      {
        path: '/services/review',
        element: <AddReview></AddReview>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/services/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/services/${params.id}`),
      },
      {
        path: '/services/:id/checkout',
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/services/${params.id}`),
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>,
  },
])

export default router
