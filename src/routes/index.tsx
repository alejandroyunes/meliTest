import { RouteObject } from 'react-router-dom'
import ErrorPage from '../pages/error-page'
import HomePage from '../pages/home'
import Layout from '../layout'
import Product from '../pages/products'
import ProductDetailsPage from '../pages/productDetails'

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'items',
        element: <Product />,
      },
      {
        path: 'items/:id',
        element: <ProductDetailsPage />,
      },
    ]
  },
]
export default routerConfig