app link: https://candid-daifuku-fba6bd.netlify.app/
storybook: https://bondar-sasha.github.io/stackoverflow/

### Main Routes
- `/`: Redirects to the homepage.
- `/posts/:postId`: View a specific post.
- `/create_post`: Create a new post.
- `/my_posts`: View posts created by the user.
- `/edit_post/:postId`: Edit an existing post.
- `/account`: User account settings.
- `/users`: List of users.
- `/users/:userId`: View a specific user profile.
- `/questions`: List of questions.
- `/create_question`: Create a new question.
- `/edit_question/:questionId`: Edit an existing question.

### Authentication Routes
- `/auth`: Redirects to the authentication section.
  - `/auth/registration`: User registration page.
  - `/auth/login`: User login page.

### Error Handling
- `*`: Redirects to a Not Found page for any undefined routes.
