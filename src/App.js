import React from 'react'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
// import Blog from './component/Blog'
import Services from './component/Services'

import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="about" element={<About/>}>
        </Route>
        <Route path="/" element={<Home />}/>
         <Route path="services" element={<Services/>}>
        </Route>
        {/* <Route path="/" element={<Home />}/>
         <Route path="blog" element={<Blog/>}>
        </Route> */}
        <Route path="/" element={<Home />}/>
         <Route path="contact" element={<Contact/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App