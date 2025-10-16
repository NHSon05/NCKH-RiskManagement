import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
// import NavBar from './components/layout/NavBar'
import HomePage from './pages/Home/Home'
import MainLayout from './layouts/MainLayout'
import ProjectPage from './pages/Project/ProjectPage'
import Report from './pages/Report/Report'
import Support from './pages/Support/Support'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='projects' element={<ProjectPage/>}/>
        <Route path='reports' element={<Report/>}/>
        <Route path='support' element={<Support/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
