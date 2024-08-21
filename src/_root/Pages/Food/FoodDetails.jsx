import React, { useState } from "react";
import BottomButton from "../../../components/RstCards/BottomButton";

const FoodDetails = () => {
  const [showFields, setShowFields] = useState(false);

  // Function to toggle visibility
  const handleAddIconsClick = () => {
    setShowFields((prevState) => !prevState);
  };
  const [showField, setShowField] = useState(false);

  // Function to toggle visibility
  const handleAddSpecificationsClick = () => {
    setShowField((prevState) => !prevState);
  };

  return (
    <div>
      {" "}
      <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6">
          <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
            Food Details
          </legend>
          {/* <h1 className="text-red1 py-5 font-semibold text-sm md:text-base lg:text-lg">
            The price for the product includes the admin commission. For
            instance, if the product is priced at $100 and the admin commission
            is 10%, the effective price would be $110 for the customer, which
            will apply automatically. Admin Commission: 15%
          </h1> */}
          <div className="grid grid-cols-1  gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              <p className="text-gray-400 text-sm">Insert Name</p>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">Price</label>
              <input
                type="text"
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Discount Price
              </label>
              <input
                type="text"
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              <p className="text-gray-400 text-sm">Insert Discount Price</p>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-semibold mb-2">
                Restaurant
              </label>
              <select className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded">
                <option value="">Select Restaurant</option>
              </select>
              <p className="text-gray-400 text-sm">Insert Restaurant</p>
            </div>
            <div className="mb-4 col-span-1">
              <label
                htmlFor="category"
                className="block text-sm font-semibold mb-2"
              >
                Select Category
              </label>
              <select
                id="category"
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              >
                <option>Select Category</option>
              </select>
            </div>
            <div className="mb-4 col-span-1">
              <label
                htmlFor="quantity"
                className="block text-sm font-semibold mb-2"
              >
                Item Quantity
              </label>
              <input
                type="number"
                id="quantity"
                value="3"
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              <p className="mt-1 text-sm text-gray-500">For unlimited set -1</p>
            </div>
            <div className="mb-4 col-span-1">
              <label
                htmlFor="attribute"
                className="block text-sm font-semibold mb-2"
              >
                Food Attribute
              </label>
              <select
                id="attribute"
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              >
                <option>Select Attribute</option>
              </select>
            </div>
            <div className="mt-4 col-span-1">
              <label className="block text-sm font-semibold mb-2">Image</label>
              <input type="file" className="block w-full text-sm" />
              <p className="text-gray-400 text-sm pt-5">Insert Image in SVG</p>
            </div>
            <div className="col-span-1 mt-4">
              <label className="block text-sm font-semibold mb-2">
                Description
              </label>
              <textarea className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded"></textarea>
              <p className="text-gray-400 text-sm">Insert Description</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="publish" className="h-4 w-4" />
                <label htmlFor="publish">Publish</label>
              </div>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <input type="checkbox" id="nonveg" className="h-4 w-4" />
                <label htmlFor="nonveg">Non Veg</label>
              </div>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <input type="checkbox" id="takeaway" className="h-4 w-4" />
                <label htmlFor="takeaway">Takeaway Option</label>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6 my-3">
          <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
            Ingredient
          </legend>
          <div className="grid grid-cols-1  gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Calories
              </label>
              <select className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"></select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Grams</label>
              <select className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"></select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Fat</label>
              <select className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"></select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Proteins
              </label>
              <select className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"></select>
            </div>
          </div>
        </fieldset>
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6 my-3">
          <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
            Add Addons
          </legend>
          <button
            className="px-3 bg-red1 text-white py-2 rounded-md mb-3"
            onClick={handleAddIconsClick}
          >
            Add Icons
          </button>
          {showFields && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Price
                  </label>
                  <select className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded">
                    <option value="">Select Price</option>
                    {/* Add price options here */}
                  </select>
                </div>
              </div>
              <button className="px-3 bg-red1 text-white py-2 rounded-md mt-3">
                Save Icons
              </button>
            </>
          )}
        </fieldset>
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6">
          <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
            Add Food Specifications
          </legend>
          <button
            className="px-3 bg-red1 text-white py-2 rounded-md mb-3"
            onClick={handleAddSpecificationsClick}
          >
            Add Food Specifications
          </button>
          {showField && (
            <>
              <div className="grid grid-cols-1  gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Label
                  </label>
                  <input
                    type="text"
                    className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Value
                  </label>
                  <select className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded">
                    <option value="">Select Value</option>
                    {/* Add value options here */}
                  </select>
                </div>
              </div>
              <button className="px-3 bg-red1 text-white py-2 rounded-md mt-3">
                Save Food Specifications
              </button>
            </>
          )}
        </fieldset>

        <BottomButton />
      </div>
    </div>
  );
};

export default FoodDetails;

// ---------------------With Form Validatiion But Not Design Set
// import React, { useState } from "react";
// import BottomButton from "../../../components/RstCards/BottomButton";

// const FoodDetails = () => {
//   const [showFields, setShowFields] = useState(false);
//   const [showField, setShowField] = useState(false);

//   // Function to toggle visibility for Addons
//   const handleAddIconsClick = () => {
//     setShowFields((prevState) => !prevState);
//   };

//   // Function to toggle visibility for Specifications
//   const handleAddSpecificationsClick = () => {
//     setShowField((prevState) => !prevState);
//   };

//   // Form state
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     discountPrice: "",
//     restaurant: "",
//     category: "",
//     quantity: 3,
//     attribute: "",
//     description: "",
//     image: null,
//     publish: false,
//     nonveg: false,
//     takeaway: false,
//   });

//   // Form validation
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.price) newErrors.price = "Price is required";
//     if (!formData.restaurant) newErrors.restaurant = "Restaurant is required";
//     if (!formData.category) newErrors.category = "Category is required";
//     if (!formData.attribute) newErrors.attribute = "Attribute is required";
//     if (!formData.image) newErrors.image = "Image is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       alert("Form submitted successfully!");
//       // Perform further actions like sending data to the server
//     } else {
//       alert("Please fill out all required fields.");
//     }
//   };

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   return (
//     <div>
//       <div className="p-4  bg-white rounded shadow-md hover:shadow-lg  ">
//         <form onSubmit={handleSubmit} className="flex flex-col items-center">
//           <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 p-6">
//             <legend className="text-md font-semibold uppercase bg-red1 text-white px-2 py-1 rounded">
//               Food Details
//             </legend>
//             <div className="grid grid-cols-1 gap-4">
//               <div className="col-span-1">
//                 <label className="block text-sm font-semibold mb-2">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-sm">{errors.name}</p>
//                 )}
//                 <p className="text-gray-400 text-sm">Insert Name</p>
//               </div>
//               <div className="col-span-1">
//                 <label className="block text-sm font-semibold mb-2">
//                   Price
//                 </label>
//                 <input
//                   type="text"
//                   name="price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                 />
//                 {errors.price && (
//                   <p className="text-red-500 text-sm">{errors.price}</p>
//                 )}
//               </div>
//               <div className="col-span-1">
//                 <label className="block text-sm font-semibold mb-2">
//                   Discount Price
//                 </label>
//                 <input
//                   type="text"
//                   name="discountPrice"
//                   value={formData.discountPrice}
//                   onChange={handleChange}
//                   className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                 />
//                 <p className="text-gray-400 text-sm">Insert Discount Price</p>
//               </div>
//               <div className="col-span-1">
//                 <label className="block text-sm font-semibold mb-2">
//                   Restaurant
//                 </label>
//                 <select
//                   name="restaurant"
//                   value={formData.restaurant}
//                   onChange={handleChange}
//                   className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                 >
//                   <option value="">Select Restaurant</option>
//                   {/* Add restaurant options here */}
//                 </select>
//                 {errors.restaurant && (
//                   <p className="text-red-500 text-sm">{errors.restaurant}</p>
//                 )}
//                 <p className="text-gray-400 text-sm">Insert Restaurant</p>
//               </div>
//               <div className="col-span-1">
//                 <label className="block text-sm font-semibold mb-2">
//                   Select Category
//                 </label>
//                 <select
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                   className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                 >
//                   <option value="">Select Category</option>
//                   {/* Add category options here */}
//                 </select>
//                 {errors.category && (
//                   <p className="text-red-500 text-sm">{errors.category}</p>
//                 )}
//               </div>
//               <div className="col-span-1">
//                 <label className="block text-sm font-semibold mb-2">
//                   Item Quantity
//                 </label>
//                 <input
//                   type="number"
//                   name="quantity"
//                   value={formData.quantity}
//                   onChange={handleChange}
//                   className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                 />
//                 <p className="mt-1 text-sm text-gray-500">
//                   For unlimited set -1
//                 </p>
//               </div>
//               <div className="col-span-1">
//                 <label className="block text-sm font-semibold mb-2">
//                   Food Attribute
//                 </label>
//                 <select
//                   name="attribute"
//                   value={formData.attribute}
//                   onChange={handleChange}
//                   className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                 >
//                   <option value="">Select Attribute</option>
//                   {/* Add attribute options here */}
//                 </select>
//                 {errors.attribute && (
//                   <p className="text-red-500 text-sm">{errors.attribute}</p>
//                 )}
//               </div>
//               <div className="col-span-1">
//                 <label className="block text-sm font-semibold mb-2">
//                   Image
//                 </label>
//                 <input
//                   type="file"
//                   name="image"
//                   onChange={(e) =>
//                     setFormData((prevState) => ({
//                       ...prevState,
//                       image: e.target.files[0],
//                     }))
//                   }
//                   className="block w-full text-sm"
//                 />
//                 {errors.image && (
//                   <p className="text-red-500 text-sm">{errors.image}</p>
//                 )}
//                 <p className="text-gray-400 text-sm pt-5">
//                   Insert Image in SVG
//                 </p>
//               </div>
//               <div className="col-span-1">
//                 <label className="block text-sm font-semibold mb-2">
//                   Description
//                 </label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded"
//                 ></textarea>
//                 <p className="text-gray-400 text-sm">Insert Description</p>
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-4">
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   name="publish"
//                   checked={formData.publish}
//                   onChange={handleChange}
//                   id="publish"
//                   className="h-4 w-4"
//                 />
//                 <label htmlFor="publish">Publish</label>
//               </div>
//               <div className="flex items-center gap-2 mt-2 sm:mt-0">
//                 <input
//                   type="checkbox"
//                   name="nonveg"
//                   checked={formData.nonveg}
//                   onChange={handleChange}
//                   id="nonveg"
//                   className="h-4 w-4"
//                 />
//                 <label htmlFor="nonveg">Non Veg</label>
//               </div>
//               <div className="flex items-center gap-2 mt-2 sm:mt-0">
//                 <input
//                   type="checkbox"
//                   name="takeaway"
//                   checked={formData.takeaway}
//                   onChange={handleChange}
//                   id="takeaway"
//                   className="h-4 w-4"
//                 />
//                 <label htmlFor="takeaway">Takeaway</label>
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
//               <button
//                 type="button"
//                 onClick={handleAddIconsClick}
//                 className="w-full sm:w-auto bg-green-500 text-white py-2 px-4 rounded"
//               >
//                 Add Addons
//               </button>
//               <button
//                 type="button"
//                 onClick={handleAddSpecificationsClick}
//                 className="w-full sm:w-auto bg-blue-500 text-white py-2 px-4 rounded"
//               >
//                 Add Specifications
//               </button>
//             </div>
//             {showFields && (
//               <>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-semibold mb-2">
//                       Title
//                     </label>
//                     <input
//                       type="text"
//                       className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold mb-2">
//                       Price
//                     </label>
//                     <select className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded">
//                       <option value="">Select Price</option>
//                       {/* Add price options here */}
//                     </select>
//                   </div>
//                 </div>
//                 <button className="px-3 bg-red1 text-white py-2 rounded-md mt-3">
//                   Save Icons
//                 </button>
//               </>
//             )}
//             {showField && (
//               <>
//                 <div className="grid grid-cols-1  gap-4">
//                   <div>
//                     <label className="block text-sm font-semibold mb-2">
//                       Label
//                     </label>
//                     <input
//                       type="text"
//                       className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold mb-2">
//                       Value
//                     </label>
//                     <select className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded">
//                       <option value="">Select Value</option>
//                       {/* Add value options here */}
//                     </select>
//                   </div>
//                 </div>
//                 <button className="px-3 bg-red1 text-white py-2 rounded-md mt-3">
//                   Save Food Specifications
//                 </button>
//               </>
//             )}
//           </fieldset>

//           <BottomButton handleSubmit={handleSubmit} />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FoodDetails;
