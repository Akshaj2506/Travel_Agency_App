import { Outlet } from 'react-router-dom'
import AdminNav from '../components/AdminNav'
import AdminLogin from '../pages/AdminLogin';

const AdminLayout = () => {
   return (
      <>
         {sessionStorage.getItem("admin-access") ? <><AdminNav /><Outlet /></> : (<AdminLogin/>)}
      </>
   )
}

export default AdminLayout