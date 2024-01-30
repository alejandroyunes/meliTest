import { RouteObject } from "react-router-dom"
import ErrorPage from "../pages/error-page";
import HomePage from "../pages/home/HomePage";
import Layout from "../layout";
import Best from "../pages/Best";

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'best',
        element: <Best />,
        errorElement: <ErrorPage />
      },
    ]
  },
];
export default routerConfig