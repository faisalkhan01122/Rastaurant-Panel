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

      <div className="w-full  h-full flex flex-col  justify-start items-start bg-primary-900 ">
        {sidebarItems.map((section, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative  flex border-b text-red1 items-center lg:w-full w-64  hover:bg-primary-800">
              <Link
                to={section.path}
                onClick={() => {
                  if (window.innerWidth <= 768) {
                    setIsSidebarOpen(false);
                  }
                }}
              >
                <button
                  className={`relative hover:border-l-4 text-white hover:border-gray-300 flex items-center justify-center h-14 w-full transition-all duration-300 ease-in-out ${
                    isSidebarOpen
                      ? "hover:border-l-4  hover:border-gray-300"
                      : "w-24  "
                  }`}
                >
                  <div className="w-16 flex   justify-center items-center text-xl">
                    {section.icon}
                  </div>
                  <div
                    className={`flex  items-center transition-transform  duration-300 ease-in-out ${
                      isSidebarOpen
                        ? " translate-x-0"
                        : "translate-x-5 border-gray-950  text-white text-3xl font-bold "
                    }`}
                  >
                    {(isSidebarOpen || hoveredItem === index) && (
                      <div
                        className={`h-14 ml-2 flex items-center whitespace-nowrap w-36 text-sm z-50`}
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
{
  /* <div className="w-full h-full flex flex-col justify-start items-start bg-primary-900 text-white">
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
          </div>
        ))}
      </div> */
}
