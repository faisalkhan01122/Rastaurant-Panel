import { Drawer } from "@mui/material";
import { HiMenu } from "react-icons/hi";
import SideBar from "./SideBar";
import { useState } from "react";

const MobileMenu = ({ isSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  return (
    <div>
      <button
        onClick={toggleDrawer(true)}
        className="text-xl p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        <HiMenu />
      </button>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <SideBar isSidebarOpen={isSidebarOpen} />
      </Drawer>
    </div>
  );
};

export default MobileMenu;
