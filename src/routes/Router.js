import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AddReview from '../components/AddReview'
import AddService from '../components/AddService'
import Blog from '../components/Blog'
import Checkout from '../components/Checkout'
import Home from '../components/Home'
import Login from '../components/Login'
import MyReviews from '../components/MyReviews'
import PageNotFound from '../components/PageNotFound'
import Register from '../components/Register'
import ServiceDetails from '../components/ServiceDetails'
import Services from '../components/Services'
import Main from '../layout/Main'
import PrivateRoute from './PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () =>
          fetch(
            'https://b6a11-service-review-server-side-naimur-rahman3954.vercel.app/services'
          ),
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
          fetch(
            `https://b6a11-service-review-server-side-naimur-rahman3954.vercel.app/services/${params.id}`
          ),
      },
      {
        path: '/services/:id/checkout',
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-naimur-rahman3954.vercel.app/services/${params.id}`
          ),
      },
      {
        path: '/myreviews/',
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-naimur-rahman3954.vercel.app/reviews/`
          ),
      },
      {
        path: '/addservice/',
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-naimur-rahman3954.vercel.app/reviews/`
          ),
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>,
  },
])

export default router
