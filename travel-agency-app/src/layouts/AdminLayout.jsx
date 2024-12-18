import { Outlet } from 'react-router-dom'
import AdminNav from '../components/AdminNav'

const AdminLayout = () => {
   return (
      <>
         <AdminNav />
         <Outlet />
      </>
   )
}

export default AdminLayout