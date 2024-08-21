// import { Outlet } from "react-router-dom";
// import { useState } from "react";
// import Sidebar from "../components/Header/SideBar";
// import { FaBars } from "react-icons/fa";
// import Header from "../components/Header";
// import BreadCrumb from "../components/Header/BreadCrumb";

// const RootLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const breadcrumbs = [
//     { href: "/dashboard", label: "Dashboard" },
//     { href: "/restaurants-payouts", label: "Restaurants Payouts" },
//   ];

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <>
//       <div className="w-full relative flex">
//         <div className={` ${sidebarOpen ? "w-60" : "w-16"}`}>
//           <Sidebar isSidebarOpen={sidebarOpen} />
//         </div>
//         <div className={`w-full flex flex-col `}>
//           <div className="flex w-full px-10 bg-primary-900 justify-between top-0 left-0 right-0">
//             <button onClick={toggleSidebar} className="text-white text-2xl">
//               <FaBars />
//             </button>
//             <Header />
//           </div>
//           <div className=" overflow-auto  p-4">
//             <div className="flex justify-between p-2 border-b">
//               <h2 className="text-2xl font-bold mb-2">Restaurants Payouts</h2>
//               <BreadCrumb breadcrumbs={breadcrumbs} />
//             </div>
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RootLayout;
// import { Outlet } from "react-router-dom";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Header from "../components/Header";
import SideBar from "../components/Header/SideBar";
import MobileMenu from "../components/Header/MobileMenu";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
                ? "lg:left-[16.6%] md:left-0 sm:left-0 left-0"
                : "lg:left-[4.1%] md:left-0 sm:left-0 left-0"
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
              sidebarOpen ? "ml-0 md:mx-10 lg:ml-60 pt-5" : "ml-0 md:ml-16"
            }`}
          >
            {" "}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
