import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Header from "../components/Header";
import SideBar from "../components/Header/SideBar";
import MobileMenu from "../components/Header/MobileMenu";
import { Outlet } from "react-router-dom";
import Processing from "../components/Processing/Processing";
import useLoading from "../components/Processing/useLoading";
const RootLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const loading = useLoading();
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="w-full relative flex">
        <div
          className={`${
            sidebarOpen ? "w-1/6" : "w-1/20"
          } h-full hidden lg:block fixed overflow-auto scrollbar-hide`}
        >
          <SideBar isSidebarOpen={sidebarOpen} />
        </div>

        <div className="flex flex-col w-full ">
          <div
            className={`fixed flex px-10 bg-primary-900 justify-between top-0  ${
              sidebarOpen
                ? "lg:left-[17%] md:left-0 sm:left-0 left-0"
                : "lg:left-[7.5%] md:left-0 sm:left-0 left-0"
            } right-0`}
          >
            <button
              onClick={toggleSidebar}
              className="text-white text-2xl lg:block md:hidden sm:hidden hidden"
            >
              <FaBars />
            </button>
            <div className="lg:hidden md:block block mt-4">
              <MobileMenu isSidebarOpen={true} />
            </div>
            <Header />
          </div>
          <div
            className={`overflow-auto mt-16  ${
              sidebarOpen
                ? "ml-0 md:ml-10 lg:ml-60 pt-5"
                : "ml-0 md:ml-24 md:mr-2"
            }`}
          >
            {loading && <Processing />} <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
