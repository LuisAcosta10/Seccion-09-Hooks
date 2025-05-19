import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { HomePage } from '../09-useContext/HomePage';
import { AboutPage } from '../09-useContext/AboutPage';
import { LoginPage } from '../09-useContext/LoginPage';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    <>
    <UserProvider>
      {/* <h1>Main App</h1> */}
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link> */}
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={ < HomePage /> } />
        <Route path="about" element={ < AboutPage /> } />
        <Route path="login" element={ < LoginPage /> } />


        <Route path="/*" element={ <Navigate to="/about" /> } />
      </Routes>
    </UserProvider>

    </>
  )
}

