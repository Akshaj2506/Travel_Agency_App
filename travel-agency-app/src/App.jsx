import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom"
import './App.css'
import MainLayout from './layouts/MainLayout'
import ShowPackages from './pages/ShowPackages'
import CreatePackage from "./pages/CreatePackage"
import AdminLayout from "./layouts/AdminLayout"
import UpdatePackage from "./pages/UpdatePackage"
import AdminShowPackages from "./pages/AdminShowPackages"
import CreateBooking from "./pages/CreateBooking"
import Invoice from "./components/Invoice"

function App() {
  document.title = "Travel Agency App"
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<ShowPackages />} />
          <Route path="/book" element={<CreateBooking/>}/>
          <Route path="/invoice" element={<Invoice/>}/>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminShowPackages />} />
          <Route path="/admin/create" element={<CreatePackage />} />
          <Route path="/admin/update/:id" element={<UpdatePackage />} />
        </Route>
      </>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
