// import { useState } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { sidebarItems } from "../../Utils/data";

// const Sidebar = ({ isSidebarOpen }) => {
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [openSection, setOpenSection] = useState(null);

//   const toggleSection = (index) => {
//     setOpenSection((prevSection) => (prevSection === index ? null : index));
//   };

//   return (
//     <div className=" ">
//       <div className={`fixed ${isSidebarOpen ? "w-52" : "w-16"} `}>
//         <img src="/logo-e.png" alt="Logo" className="w-16  mx-auto" />
//       </div>
//       <div className="fixed mt-16 flex flex-col bg-primary-900 h-screen text-white transition-all duration-300 ease-in-out overflow-y-auto">
//         {sidebarItems.map((section, index) => (
//           <div key={index}>
//             <div
//               className="relative flex items-center hover:bg-primary-100 hover:text-primary-900"
//               onMouseEnter={() => setHoveredItem(index)}
//               onMouseLeave={() => setHoveredItem(null)}
//             >
//               <Link to={section.path}>
//                 <div
//                   onClick={() => toggleSection(index)}
//                   className={`relative flex items-center justify-center h-14 w-full`}
//                 >
//                   <div className="w-16 flex justify-center items-center text-lg">
//                     {section.icon}
//                   </div>
//                   {(isSidebarOpen || hoveredItem === index) && (
//                     <div
//                       className={`p-2 h-16 items-center text-sm flex text-left transition-all duration-300 ease-in-out ${
//                         isSidebarOpen ? "w-36" : "w-52"
//                       }`}
//                     >
//                       {section.title}
//                     </div>
//                   )}
//                 </div>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// Sidebar.propTypes = {
//   isSidebarOpen: PropTypes.bool.isRequired,
// };

// export default Sidebar;
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";
import PropTypes from "prop-types";
import { sidebarItems } from "../../Utils/data";

const SideBar = ({ isSidebarOpen }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="h-full fixed ">
      <div className="bg-white w-full h-16">
        <img src="/logo-e.png" alt="Logo" className="w-16 mx-auto" />
      </div>

      <div className="w-full h-full flex flex-col justify-start items-start bg-primary-900 text-white">
        {sidebarItems.map((section, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative flex border-b items-center hover:bg-primary-100 lg:w-full w-64 hover:text-primary-900">
              <Link to={section.path}>
                <button
                  className={`relative flex items-center justify-center h-14 w-full transition-all duration-300 ease-in-out hover:border-l-4 hover:border-primary-900`}
                >
                  <div className="w-16 flex justify-center items-center text-xl">
                    {section.icon}
                  </div>
                  <div
                    className={` flex items-center transition-transform duration-300 ease-in-out ${
                      isSidebarOpen ? "translate-x-0" : "-translate-x-10"
                    }`}
                  >
                    {(isSidebarOpen || hoveredItem === index) && (
                      <div
                        className={` h-14 ml-2 flex items-center whitespace-nowrap w-36 text-sm z-50  `}
                      >
                        {section.title}
                      </div>
                    )}
                    {isSidebarOpen && section.subSections && (
                      <div className="text-white">
                        {hoveredItem === index ? (
                          <FaCaretDown />
                        ) : (
                          <FaCaretRight />
                        )}
                      </div>
                    )}
                  </div>
                </button>
              </Link>
            </div>

            {section.subSections && (
              <div
                className={`${
                  hoveredItem === index ? "block" : "hidden"
                } bg-primary-700 transition-all duration-300 ease-in-out`}
              >
                {section.subSections.map((subSection, subIndex) => (
                  <Link
                    to={subSection.path}
                    key={subIndex}
                    className="flex items-center px-8 py-2 hover:bg-primary-600 hover:text-white"
                  >
                    <div
                      className={`flex text-white justify-center w-8 p-2 transition-transform duration-300 ease-in-out ${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-10"
                      }`}
                    >
                      {subSection.icon}
                    </div>
                    <span
                      className={`transition-transform duration-300  ease-in-out ${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-10"
                      }`}
                    >
                      {subSection.title}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

SideBar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default SideBar;
