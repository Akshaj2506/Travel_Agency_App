import { useEffect, useState } from "react"

const ShowBookings = () => {
   const [bookings, setBookings] = useState([]);
   useEffect(() => {
      const fetchAllBookings = async () => {
         await fetch("http://localhost:5000/api/booking/fetchAll", {
            method: "GET",
            headers: {
               "Content-Type": "application/json"
            }
         }).then(res => res.json())
            .then(data => setBookings(data.bookings))
      }
      fetchAllBookings()
   }, [])
   return (
      <>
         <div className="relative overflow-auto">
            <div className="shadow-sm overflow">
               <table className="rounded-full border-collapse table-fixed w-full text-sm">
                  <thead className="bg-slate-600">
                     <tr>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-4 pb-3 text-slate-400 dark:text-slate-200 text-left">Name</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pt-4 pb-3 text-slate-400 dark:text-slate-200 text-left">Selected Package</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-4 pb-3 text-slate-400 dark:text-slate-200 text-left">E-mail</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-4 pb-3 text-slate-400 dark:text-slate-200 text-left">Phone Number</th>
                        <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-4 pb-3 text-slate-400 dark:text-slate-200 text-left">Number of Travellers</th>
                     </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-800">
                     {bookings.map(booking => (
                        <tr key={booking._id}>
                           <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{booking.name}</td>
                           <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{booking.selectedPackage}</td>
                           <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{booking.email}</td>
                           <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{booking.phoneNumber}</td>
                           <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{booking.travellerQuantity}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div></div>
      </>
   )
}

export default ShowBookings