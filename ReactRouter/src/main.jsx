import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Layout from './component/Layout/Layout.jsx'
import Home from './Home/Home.jsx'
import Contact from './Contact/Contact.jsx'
import About from './About/About.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children :[
      {
        path :"",
        element:<Home/>
      },
      {
        path :"About",
        element:<About/>
      },
      {
        path :"Contact",
        element:<Contact/>
      }
      
    ]
    
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
