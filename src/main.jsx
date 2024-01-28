import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

// const route = createBrowserRouter([
// {
//   path: '/',
//   element: <Root />,
//   children: [
//     {
//       path: "",
//       element: <Home />
//     },
//     {
//       path: "About",
//       element: <About />
//     },
//     {
//       path: "Contact",
//       element: <Contact />
//     }
//   ]

// }
// ])

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:id' element={<User />}/>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Props */}
    <RouterProvider router={route} />
  </React.StrictMode>,
)
