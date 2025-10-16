import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
// import NavBar from './components/layout/NavBar'
import HomePage from './pages/Home/Home'
import MainLayout from './layouts/MainLayout/MainLayout'
import ProjectPage from './pages/Project/ProjectPage'
import Report from './pages/Report/Report'
import Support from './pages/Support/Support'
import LandingPage from './pages/Landing/LandingPage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='landingpage' element={<LandingPage/>}/>
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
