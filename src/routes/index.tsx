import { RouteObject } from "react-router-dom"
import ErrorPage from "../pages/error-page"
import HomePage from "../pages/home"
import Layout from "../layout"
import Product from "../pages/products"
import ProductDetailsPage from "../pages/productDetails"

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'items',
        element: <Product />,
        errorElement: <ErrorPage />
      },
      {
        path: 'items/:id',
        element: <ProductDetailsPage />,
        errorElement: <ErrorPage />
      },
    ]
  },
]
export default routerConfig