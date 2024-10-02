import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
// import Course from './components/Course'
import Courses from './courses/Courses'
import Signup from './components/Signup'

import ContactForm from './contactForm/ContactForm'
import AboutUs from './about/AboutUs'

const App=()=> {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/course' element={<Courses />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/about' element={<AboutUs/> } />
        </Routes>
        </div>
    </>
  )
}

export default App