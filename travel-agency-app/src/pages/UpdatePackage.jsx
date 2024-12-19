import { useState } from "react"
import { useLocation } from "react-router-dom"
import Datepicker from "react-tailwindcss-datepicker"
const UpdatePackage = () => {
   const { state: packageData } = useLocation();
   const [formData, setFormData] = useState({
      title: packageData?.title || null,
      description: packageData?.description || null,
      price: {
         $numberDecimal : packageData?.price.$numberDecimal || null,
      },
      availableDate: packageData?.availableDate || null,
      img: packageData?.img || null
   })
   const [date, setDate] = useState(formData.availableDate);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   }
   const handlePriceChange = (e) => {
      const value = e.target.value;
      setFormData({
         ...formData,
         price: { ...formData.price, $numberDecimal: value }
      });
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const resp = await fetch(`http://localhost:5000/api/package/update/${packageData._id}`, {
            method: "PUT",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
         });

         // Check for HTTP errors
         if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
         }

         const data = await resp.json();
         console.log("Package updated successfully:", data);
         alert("Package updated successfully");
      } catch (error) {
         console.error("Error during update:", error);
         alert("An error occurred while updating the package");
      }
   }
   return (
      <form className="w-max m-auto" onSubmit={handleSubmit}>
         <div className="space-y-12">
            <div>
               <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                     <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">Title</label>
                     <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                           <input onChange={handleChange} type="text" name="title" id="title" className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="Rajasthan Tour" value={formData.title} />
                        </div>
                     </div>
                  </div>
                  <div className="sm:col-span-3">
                     <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">Price (per head)</label>
                     <div className="mt-2">
                        <input onChange={handlePriceChange} type="number" name="price" id="price" autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="$4500" value={formData.price.$numberDecimal} />
                     </div>
                  </div>
                  <Datepicker
                     placeholder="Preffered Date"
                     inputId="availableDate"
                     inputName="availableDate"
                     displayFormat="DD/MM/YYYY"
                     asSingle={true}
                     value={{
                        startDate: new Date(date).toString(),
                        endDate: new Date(date).toString(),
                     }}
                     onChange={(newValue) => {
                        setDate(newValue.endDate.toISOString())
                        setFormData({ ...formData, availableDate: newValue.endDate.toISOString() });
                     }}
                  />
                  <div className="col-span-full">
                     <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">Description</label>
                     <div className="mt-2">
                        <textarea onChange={handleChange} name="description" id="description" rows="3" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" value={formData.description}></textarea>
                     </div>
                  </div>
                  <div className="col-span-full">
                     <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">Image URL</label>
                     <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                           <input onChange={handleChange} type="text" name="img" id="img" className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="https://images.google.com" value={formData.img} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm/6 font-semibold text-gray-900">Cancel</button>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
         </div>
      </form>
   )
}

export default UpdatePackage