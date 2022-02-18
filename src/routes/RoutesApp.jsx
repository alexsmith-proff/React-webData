import React from 'react'
import { Route, Routes } from 'react-router'
import AboutUsPage from '../pages/AboutUsPage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ProfilePage from '../pages/ProfilePage'
import RegistrationPage from '../pages/RegistrationPage'

function RoutesApp() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
    </Routes>
  )
}

export default RoutesApp