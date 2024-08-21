import { FaHome, FaBook, FaWallet } from "react-icons/fa";
import { RiHomeGearFill } from "react-icons/ri";

export const sidebarItems = [
  { title: "Dashboard", icon: <FaHome />, path: "/" }, // 1. Dashboard
  { title: "Documents", icon: <RiHomeGearFill />, path: "/documents" }, // 2. God's Eye
  {
    title: (
      <span>
        {" "}
        Books Table / DINE <br /> IN History
      </span>
    ),
    icon: <FaBook />,
    path: "/booktable",
  }, // 3. Zone
  {
    title: "Wallet Transactions",
    icon: <FaWallet />,
    path: "/wallet-trasections",
  }, // 4. Wallet Transactions
];
