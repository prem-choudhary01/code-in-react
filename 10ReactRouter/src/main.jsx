import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contect/contect.jsx'
import GitHub from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>
      } ,
      {
        path : "about",
        element : <About/>
      },
      {
        path : "contect",
        element : <Contact/>
      },
      {
        path : "github",
        element : <GitHub/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router}/>

    
  </StrictMode>,
)
