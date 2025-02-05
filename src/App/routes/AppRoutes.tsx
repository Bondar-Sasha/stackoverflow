import {FC, Suspense} from 'react'
import {lazily} from 'react-lazily'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'

import {Redirection} from '../../Processes'
import {DownloadMask} from '../../Widgets'

const {
  LayoutPage,
  SimpleLayoutPage,
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
  AccountPage,
} = lazily(() => import('../../Pages'))

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<DownloadMask />}>
              <Redirection>
                <LayoutPage />
              </Redirection>
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<DownloadMask />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="posts/:postId"
            element={
              <Suspense fallback={<DownloadMask />}>
                <PostPage />
              </Suspense>
            }
          />
          <Route
            path="create_post"
            element={
              <Suspense fallback={<DownloadMask />}>
                <CreatePostPage />
              </Suspense>
            }
          />
          <Route
            path="my_posts"
            element={
              <Suspense fallback={<DownloadMask />}>
                <MyPostsPage />
              </Suspense>
            }
          />
          <Route
            path="edit_post/:postId"
            element={
              <Suspense fallback={<DownloadMask />}>
                <EditPostPage />
              </Suspense>
            }
          />
          <Route
            path="account"
            element={
              <Suspense fallback={<DownloadMask />}>
                <AccountPage />
              </Suspense>
            }
          />
          <Route
            path="users"
            element={
              <Suspense fallback={<DownloadMask />}>
                <UsersPage />
              </Suspense>
            }
          />
          <Route
            path="users/:userId"
            element={
              <Suspense fallback={<DownloadMask />}>
                <UserPage />
              </Suspense>
            }
          />
          <Route
            path="questions"
            element={
              <Suspense fallback={<DownloadMask />}>
                <QuestionsPage />
              </Suspense>
            }
          />
          <Route
            path="create_question"
            element={
              <Suspense fallback={<DownloadMask />}>
                <CreateQuestionPage />
              </Suspense>
            }
          />
          <Route
            path="edit_question/:questionId"
            element={
              <Suspense fallback={<DownloadMask />}>
                <EditQuestionPage />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="/auth"
          element={
            <Suspense fallback={<DownloadMask />}>
              <Redirection>
                <SimpleLayoutPage />
              </Redirection>
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<DownloadMask />}>
                <Navigate to="/" replace />
              </Suspense>
            }
          />
          <Route
            path="registration"
            element={
              <Suspense fallback={<DownloadMask />}>
                <RegisterPage />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<DownloadMask />}>
                <LoginPage />
              </Suspense>
            }
          />
        </Route>

        <Route
          element={
            <Suspense fallback={<DownloadMask />}>
              <SimpleLayoutPage />
            </Suspense>
          }
        >
          <Route
            path="*"
            element={
              <Suspense fallback={<DownloadMask />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
