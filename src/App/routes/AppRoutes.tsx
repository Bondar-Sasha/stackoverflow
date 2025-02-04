import {FC} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'

import {Redirection} from '../../Processes'
import {
  AccountPage,
  HomePage,
  LoginPage,
  RegisterPage,
  QuestionsPage,
  CreateQuestionPage,
  EditQuestionPage,
  UsersPage,
  UserPage,
} from '../../Pages'
import {LayoutPage, SimpleLayoutPage} from '../../Pages'

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Redirection>
              <LayoutPage />
            </Redirection>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="edit_question" element={<Navigate to="/" replace />} />
          <Route path="edit_post" element={<Navigate to="/" replace />} />
          <Route path="posts" element={<></>} />
          <Route path="create_post" element={<></>} />
          <Route path="my_posts" element={<></>} />
          <Route path="edit_post/:postId" element={<></>} />
          <Route path="account" element={<AccountPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:userId" element={<UserPage />} />
          <Route path="questions" element={<QuestionsPage />} />
          <Route path="create_question" element={<CreateQuestionPage />} />
          <Route
            path="edit_question/:questionId"
            element={<EditQuestionPage />}
          />
        </Route>

        <Route
          path="/auth"
          element={
            <Redirection>
              <SimpleLayoutPage />
            </Redirection>
          }
        >
          <Route index element={<Navigate to="/" replace />} />
          <Route path="registration" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<SimpleLayoutPage />}>
          <Route index element={<>404 Not Found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
