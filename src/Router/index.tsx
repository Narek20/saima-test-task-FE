import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import YoutubeVideoDownload from '../pages/YoutubeVideoDownload'
import CourseraVideoDownload from '../pages/CourseraVideoDownload'

const Routers = () => {
  const isAuthenticated = localStorage.getItem('token')

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="*" element={<Home />} />
          <Route path="/youtube" element={<YoutubeVideoDownload />} />
          <Route path="/coursera" element={<CourseraVideoDownload />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </>
      )}
    </Routes>
  )
}

export default Routers
