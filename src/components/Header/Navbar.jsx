// import React, { useState } from "react";
// import { FaUser } from "react-icons/fa";
// import { RiUserStarFill } from "react-icons/ri";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div>
//       <nav className="p-2 flex h-16 w-auto justify-between items-center">
//         <div className="relative">
//           <button
//             onClick={toggleDropdown}
//             className="w-12 h-12 flex justify-center items-center bg-white text-primary-900 rounded-full text-3xl focus:outline-none"
//           >
//             <RiUserStarFill />
//           </button>

//           {dropdownOpen && (
//             <div className="absolute top-12 border right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2">
//               <div className="flex flex-col items-center p-2 border-b">
//                 <img
//                   src="https://foodie.siswebapp.com/images/users/user-new.png"
//                   alt="User"
//                   className="rounded-full h-10 mb-2"
//                 />
//                 <span className="text-gray-700 font-bold">
//                   Super Administrator
//                 </span>
//                 <span className="text-gray-500 text-sm">
//                   Super Administrator
//                 </span>
//               </div>
//               <Link
//                 to={"/profile"}
//                 className="w-full px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-100 flex items-center"
//               >
//                 <FaUser className="mr-2" /> Profile
//               </Link>
//               <button className="w-full px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-100 flex items-center">
//                 <span className="mr-2">&#x23FB;</span> Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

import { RiUserStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ProfileOpen, setprofileOpen] = useState(false);
  const toggleProfile = () => {
    setprofileOpen(!ProfileOpen);
  };

  const handleLogoutClick = () => {
    setProfileOpen(false);
  };
  // Function to handle the link click and close the dropdown
  const handleProfileClick = () => {
    setProfileOpen(false);
  };

  return (
    <div>
      <nav className="p-2 flex  h-16 w-auto justify-between items-center">
        <div className="relative flex gap-2  p-0 items-center ">
          <BiWorld className="text-xl font-bold text-white" />
          <select
            name=""
            id=""
            className="mx-2 h-6 bg-primary-500 rounded text-white"
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>

          <button
            onClick={toggleProfile}
            className="w-12 h-12 flex justify-center items-center bg-white text-primary-900 rounded-full text-3xl focus:outline-none"
          >
            <RiUserStarFill />
          </button>
          {ProfileOpen && (
            <div className="absolute top-12 border right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2">
              <div className="flex flex-col items-center p-2 border-b">
                <img
                  src="https://foodie.siswebapp.com/images/users/user-new.png"
                  alt="User"
                  className="rounded-full h-10 mb-2"
                />
                <span className="text-gray-700 font-bold">
                  Super Administrator
                </span>
                <span className="text-gray-500 text-sm">
                  Super Administrator
                </span>
              </div>
              <div>
                <Link
                  to={"/profile"}
                  onClick={handleProfileClick} // Close dropdown on click
                  className="w-full px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-100 flex items-center"
                >
                  <FaUser className="mr-2" /> Profile
                </Link>
                <button
                  onClick={handleLogoutClick} // Close dropdown on click
                  className="w-full px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-100 flex items-center"
                >
                  <span className="mr-2">&#x23FB;</span> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
