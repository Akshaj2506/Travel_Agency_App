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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<ShowPackages/>}/>
        <Route path="/create" element={<CreatePackage/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
