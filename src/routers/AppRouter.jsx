import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../pages/About'
import Categories from '../pages/Categories'
import Contact from '../pages/Contact'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Payments from '../pages/Payments'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import PublicRoute from './PublicRoute'
import RequireAuth from './RequireAuth'

function AppRouter() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/' element={<Home />} />

          <Route exact path='/profile/:username' element={<Profile />} />
          <Route exact path='/categories' element={<Categories />} />

          <Route exact path='/login' element={<PublicRoute><Login /></PublicRoute>} />
          <Route exact path='/register' element={<PublicRoute><Register /></PublicRoute>} />

          <Route exact path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route exact path='/payments' element={<RequireAuth><Payments /></RequireAuth>} />

          <Route path='*' element={<NotFound />} /> {/* Para todas las rutas (*), por si el cliente accede a una ruta que no existe. Debe ponerse siempre al final y no debe ser exacta. */}
        </Routes>
      </Router>
  )
}

export default AppRouter