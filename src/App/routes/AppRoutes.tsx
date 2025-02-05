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
  CreatePostPage,
  NotFoundPage,
  MyPostsPage,
  PostPage,
  EditPostPage,
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
          <Route path="posts/:postId" element={<PostPage />} />
          <Route path="create_post" element={<CreatePostPage />} />
          <Route path="my_posts" element={<MyPostsPage />} />
          <Route path="edit_post/:postId" element={<EditPostPage />} />
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
        <Route element={<SimpleLayoutPage />}>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
