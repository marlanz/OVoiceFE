import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./root.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import PremiumPage from "./pages/PremiumPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import DetailBook from "./pages/DetailBook.jsx";
import Seller from "./pages/Seller.jsx";
import Transaction from "./pages/Transaction.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/premium",
    element: <PremiumPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/search/id",
    element: <DetailBook />,
  },
  {
    path: "/seller/id",
    element: <Seller />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
