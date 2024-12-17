import { useEffect, useState } from "react"

const ShowPackages = () => {
   const [packages, setPackages] = useState({});
   useEffect(() => {
      const fetchAllPackages = async () => {
         const response = await fetch("http://localhost:5000/api/package/fetchAll")
         const data = await response.json()
         setPackages(data);
      }
      fetchAllPackages()
      console.log(packages);
      
   })

   return (
      <>

      </>
   )
}

export default ShowPackages