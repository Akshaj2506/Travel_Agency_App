import { useEffect, useState } from "react"

const AdminShowPackages = () => {
   const [packages, setPackages] = useState([]);
   useEffect(() => {
      const fetchAllPackages = async () => {
         await fetch("http://localhost:5000/api/package/fetchAll", {
            method: "GET",
            headers: {
               "Content-Type": "application/json"
            }
         }).then(res => res.json())
            .then(data => setPackages(data.packages))
      }
      fetchAllPackages()
   }, [])

   return (
      <>
         <div className="relative overflow-auto">
            <div className="shadow-sm overflow py-4">
               <table className="rounded-full border-collapse table-fixed w-full text-sm">
                  <thead className="bg-slate-600">
                     <tr>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-4 pb-3 text-slate-400 dark:text-slate-200 text-left">Title</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pt-4 pb-3 text-slate-400 dark:text-slate-200 text-left">Description</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-4 pb-3 text-slate-400 dark:text-slate-200 text-left">Price</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-4 pb-3 text-slate-400 dark:text-slate-200 text-left">Available Date</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-4 pb-3 text-slate-400 dark:text-slate-200 text-left">Update</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-4 pb-3 text-slate-400 dark:text-slate-200 text-left">Delete</th>
                     </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-800">
                     {packages.map(pack => (
                        <tr key={pack._id}>
                           <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{pack.title}</td>
                           <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{pack.description}</td>
                           <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{pack.price.$numberDecimal}</td>
                           <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{new Date(pack.availableDate).getDate()}/{new Date(pack.availableDate).getMonth()}/{new Date(pack.availableDate).getFullYear()}</td>
                           <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"><button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Update</button></td>
                           <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"><button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button></td>
                           
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div></div>
      </>
   )
}

export default AdminShowPackages