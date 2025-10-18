import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
// import NavBar from './components/layout/NavBar'
import HomePage from './pages/Home/Home'
import MainLayout from './layouts/MainLayout'
import ProjectPage from './pages/Project/ProjectPage'
import Report from './pages/Report/Report'
import Support from './pages/Support/Support'
import LandingPage from './pages/Landing/LandingPage'
import ProjectLayout from './layouts/ProjectsLayout'
import Info from './pages/Project/steps/Info'
import Pestel from './pages/Project/steps/Pestel'
import Target from './pages/Project/steps/Target'
import Identify from './pages/Project/steps/Identify'
import Evaluation from './pages/Project/steps/Evaluation'
import NotFound from './pages/NotFound/NotFound'
import PublicLayout from './layouts/PublicLayout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<PublicLayout/>}>
          <Route index element={<LandingPage/>}/>
        </Route>

        <Route path='/' element={<MainLayout/>}>
          <Route path='home' element={<HomePage/>}/>
          <Route path='projects' element={<ProjectLayout/>}>
            <Route index element={<ProjectPage/>}/>
            <Route path='info' element={<Info/>}/>
            <Route path='pestel' element={<Pestel/>}/>
            <Route path='target' element={<Target/>}/>
            <Route path='identify' element={<Identify/>}/>
            <Route path='evaluation' element={<Evaluation/>}/>
          </Route>
          <Route path='reports' element={<Report/>}/>
          <Route path='support' element={<Support/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
