import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const AdminShowPackages = () => {
   const [packages, setPackages] = useState([]);
   const navigate = useNavigate();
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
   const confirmDelete = async (id) => {
      const userResponse = confirm("Are you sure that you want to delete this package?");
      if (userResponse) {
         await fetch(`http://localhost:5000/api/package/delete/${id}`,{
            method: "DELETE"
         }).then(alert("Package Deleted"))
      }else {
         alert("Delete Action Cancelled")
      }
   }
   return (
      <>
         <div className="relative overflow-auto">
            <Link to="/admin/create"className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 ml-2 my-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 inline-block">Add Package</Link>
            <div className="shadow-sm overflow">
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
                           <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{new Date(pack.availableDate).getDate()}/{new Date(pack.availableDate).getMonth()+1}/{new Date(pack.availableDate).getFullYear()}</td>
                           <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"><button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" onClick={() => navigate(`/admin/update/${pack._id}`, {state: pack})}>Update</button></td>
                           <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"><button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => confirmDelete(pack._id)}>Delete</button></td>
                           
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div></div>
      </>
   )
}

export default AdminShowPackages