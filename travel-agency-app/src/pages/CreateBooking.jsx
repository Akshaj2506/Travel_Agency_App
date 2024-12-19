import { useState } from "react";

const CreateBooking = () => {
   const [formData, setFormData] = useState({
      name: null,
      email: null,
      phoneNumber: null,
      selectedPackage: null,
      travellerQuantity: null,
      specialRequests: null
   })
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   }
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await fetch("http://localhost:5000/api/package/add", {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
         });

         if (response.ok) {
            alert("Package added successfully!");
         } else {
            alert("Error Occurred");
         }
      } catch (error) {
         console.error("Error:", error);
         alert("Error adding package");
      }
   }
   return (
      <form className="w-max m-auto" onSubmit={handleSubmit}>
         <div className="space-y-12">
            <div>
               <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                     <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">Name</label>
                     <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                           <input onChange={handleChange} type="text" name="name" id="name" className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="John Doe" />
                        </div>
                     </div>
                  </div>
                  <div className="sm:col-span-3">
                     <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">Phone</label>
                     <div className="mt-2">
                        <input onChange={handleChange} type="number" name="phone" id="phone" autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="+91 12345 67890" />
                     </div>
                  </div>
                  <div className="sm:col-span-3">
                     <label htmlFor="travellerQuantity" className="block text-sm/6 font-medium text-gray-900">Number of Travellers</label>
                     <div className="mt-2">
                        <input onChange={handleChange} type="number" name="travellerQuantity" id="travellerQuantity" autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="4" min={1} max={15} />
                     </div>
                  </div>
                  <div className="col-span-3">
                     <label htmlFor="selectedPackage" className="block text-sm/6 font-medium text-gray-900">Selected Package</label>
                     <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                           <input onChange={handleChange} type="text" name="selectedPackage" id="selectedPackage" className="block min-w-0 grow py-1.5 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" disabled />
                        </div>
                     </div>
                  </div>
                  <div className="sm:col-span-6">
                     <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">E-mail</label>
                     <div className="mt-2">
                        <input onChange={handleChange} type="email" name="email" id="email" autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="johndoe@example.com" />
                     </div>
                  </div>
                  <div className="col-span-full">
                     <label htmlFor="specialRequests" className="block text-sm/6 font-medium text-gray-900">Special Requests</label>
                     <div className="mt-2">
                        <textarea onChange={handleChange} name="specialRequests" id="specialRequests" rows="3" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="Complimentary breakfast..."></textarea>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Book</button>
         </div>
      </form>
   )
}

export default CreateBooking