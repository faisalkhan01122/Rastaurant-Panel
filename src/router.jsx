import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import DashBoard from "./_root/Pages/DashBoard";
import Documents from "./_root/Pages/Documents";
import WalletTransecation from "./_root/Pages/WalletTransication";
import Page404 from "./_root/Pages/Page404";
import OrdersPage from "./_root/Pages/OrdersPage";
import RstOrderCard from "./components/RstCards/RstOrderCard";
import Food from "./_root/Pages/Food/Food";
import FoodDetails from "./_root/Pages/Food/FoodDetails";
import RestaurantPayOutDetails from "./_root/Pages/RestaurantPayOutDetails";
import Orders from "./components/Order/Orders";
import TotalOrder from "./components/RstCards/TotalOrder";
import BookTableDine from "./_root/Pages/BookTableDine";
import DocumentsEdit from "./_root/Pages/DocumentsEdit";
import MainForm from "./components/Profile/MainForm";

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <DashBoard />,
      },
      {
        path: "/profile",
        element: <MainForm />,
      },
      {
        path: "/earning",
        element: <RstOrderCard />,
      },
      {
        path: "/create",
        element: <RestaurantPayOutDetails />,
      },

      {
        path: "/food",
        element: <Food />,
      },
      {
        path: "/fooddetailes",
        element: <FoodDetails />,
      },
      {
        path: "documents",
        element: <Documents />,
      },

      {
        path: "edit",
        element: <DocumentsEdit />,
      },
      {
        path: "/booktable",
        element: <BookTableDine />,
      },
      {
        path: "documents/:id",
      },
      {
        path: "wallet-trasections",
        element: <WalletTransecation />,
      },
      { path: "*", element: <Page404 /> }, // 404 Page
      {
        path: "orders",
        element: <TotalOrder />,
      },
    ],
  },
]);

export default router;
