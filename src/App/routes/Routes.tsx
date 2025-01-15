import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { RegisterPage } from '../../Pages/Register'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>home</>} />
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="/login" element={<></>} />
        <Route path="/post" element={<></>} />
        <Route path="/account" element={<></>} />
        <Route path="/create_post" element={<></>} />
        <Route path="/my_posts" element={<></>} />
        <Route path="/edit_post" element={<></>} />
        <Route path="/users" element={<></>} />
        <Route path="/users/:userId" element={<></>} />
        <Route path="/questions" element={<></>} />
        <Route path="/create_question" element={<></>} />
        <Route path="/edit_question" element={<></>} />
        <Route path="*" element={<>404 Not Found</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
