import React, { FC, ReactNode } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Redirection } from '../../Processes'
import { AccountPage, HomePage, LoginPage, RegisterPage } from '../../Pages'
import { LayoutPage, SimpleLayoutPage } from '../../Pages'

interface RedirectWrapperProps {
  children: ReactNode
}

const RedirectWrapper: FC<RedirectWrapperProps> = ({ children }) => {
  return (
    <>
      <Redirection />
      {children}
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
              <LayoutPage />
            </RedirectWrapper>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="posts" element={<></>} />
          <Route path="create_post" element={<></>} />
          <Route path="my_posts" element={<></>} />
          <Route path="edit_post" element={<></>} />
          <Route path="account" element={<AccountPage />} />
          <Route path="users" element={<></>} />
          <Route path="users/:userId" element={<></>} />
          <Route path="questions" element={<></>} />
          <Route path="create_question" element={<></>} />
          <Route path="edit_question" element={<></>} />
        </Route>

        <Route
          path="/auth"
          element={
            <RedirectWrapper>
              <SimpleLayoutPage />
            </RedirectWrapper>
          }
        >
          <Route path="registration" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route
          path="*"
          element={
            <RedirectWrapper>
              <SimpleLayoutPage />
            </RedirectWrapper>
          }
        >
          <Route
            index
            element={
              <RedirectWrapper>
                <>404 Not Found</>
              </RedirectWrapper>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
