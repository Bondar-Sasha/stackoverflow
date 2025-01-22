import React, { FC, ReactNode } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Redirection } from '../../Processes'
import { AccountPage, HomePage, LoginPage, RegisterPage } from '../../Pages'

interface RedirectWrapperProps {
  children: ReactNode
}

const RedirectWrapper: FC<RedirectWrapperProps> = ({ children }) => {
  return (
    <>
      {children}
      <Redirection />
    </>
  )
}

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RedirectWrapper>
              <HomePage />
            </RedirectWrapper>
          }
        />
        <Route
          path="auth/registration"
          element={
            <RedirectWrapper>
              <RegisterPage />
            </RedirectWrapper>
          }
        />
        <Route
          path="auth/login"
          element={
            <RedirectWrapper>
              <LoginPage />
            </RedirectWrapper>
          }
        />
        <Route
          path="/post"
          element={
            <RedirectWrapper>
              <></>
            </RedirectWrapper>
          }
        />
        <Route
          path="/create_post"
          element={
            <RedirectWrapper>
              <></>
            </RedirectWrapper>
          }
        />
        <Route
          path="/my_posts"
          element={
            <RedirectWrapper>
              <></>
            </RedirectWrapper>
          }
        />
        <Route
          path="/edit_post"
          element={
            <RedirectWrapper>
              <></>
            </RedirectWrapper>
          }
        />
        <Route
          path="/account"
          element={
            <RedirectWrapper>
              <AccountPage />
            </RedirectWrapper>
          }
        />
        <Route
          path="/users"
          element={
            <RedirectWrapper>
              <></>
            </RedirectWrapper>
          }
        />
        <Route
          path="/users/:userId"
          element={
            <RedirectWrapper>
              <></>
            </RedirectWrapper>
          }
        />
        <Route
          path="/questions"
          element={
            <RedirectWrapper>
              <></>
            </RedirectWrapper>
          }
        />
        <Route
          path="/create_question"
          element={
            <RedirectWrapper>
              <></>
            </RedirectWrapper>
          }
        />
        <Route
          path="/edit_question"
          element={
            <RedirectWrapper>
              <></>
            </RedirectWrapper>
          }
        />
        <Route
          path="*"
          element={
            <RedirectWrapper>
              <>404 Not Found</>
            </RedirectWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
