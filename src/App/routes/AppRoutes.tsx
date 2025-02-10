import {FC} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'

import {Redirection} from '@/Processes'

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
  CreatePostPage,
  NotFoundPage,
  MyPostsPage,
  PostPage,
  EditPostPage,
  LayoutPage,
  SimpleLayoutPage,
} from '@/Pages'
import SecureRoute from './secure routes/SecureRoute'
import {useLinkedGetAuth} from '@/Shared'

const AppRoutes: FC = () => {
  const {userId} = useLinkedGetAuth()

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
          <Route path="posts/:postId" element={<PostPage />} />
          <Route
            path="create_post"
            element={
              <SecureRoute redirectTo="/auth/login" isRedirection={!!userId}>
                <CreatePostPage />
              </SecureRoute>
            }
          />
          <Route path="my_posts" element={<MyPostsPage />} />
          <Route
            path="edit_post/:postId"
            element={
              <SecureRoute redirectTo="/auth/login" isRedirection={!!userId}>
                <EditPostPage />
              </SecureRoute>
            }
          />
          <Route
            path="account"
            element={
              <SecureRoute redirectTo="/auth/login" isRedirection={!!userId}>
                <AccountPage />
              </SecureRoute>
            }
          />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:userId" element={<UserPage />} />
          <Route path="questions" element={<QuestionsPage />} />
          <Route
            path="create_question"
            element={
              <SecureRoute redirectTo="/auth/login" isRedirection={!!userId}>
                <CreateQuestionPage />
              </SecureRoute>
            }
          />
          <Route
            path="edit_question/:questionId"
            element={<EditQuestionPage />}
          />
        </Route>

        <Route
          path="/auth"
          element={
            <SecureRoute isRedirection={!!userId} redirectTo="/">
              <SimpleLayoutPage />
            </SecureRoute>
          }
        >
          <Route index element={<Navigate to="/" replace />} />
          <Route path="registration" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<SimpleLayoutPage />}>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
