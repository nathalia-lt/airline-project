import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BookTripPage from './pages/BookTripPage/BookTripPage.jsx'
import ChooseFlightPage from './pages/ChooseFlightPage/ChooseFlightPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <BookTripPage/>,

  },
  {
    path: "/choose-flight",
    element: <ChooseFlightPage/>,
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
