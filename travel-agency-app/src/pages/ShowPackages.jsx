import { useEffect, useState } from "react"
import Package from "../components/Package";

const ShowPackages = () => {
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
         <div className="p-12 grid grid-cols-4 gap-3">
            {packages.map(pack => (
               <Package key={pack.id} pack={pack} />
            ))}
         </div>
      </>
   )
}

export default ShowPackages