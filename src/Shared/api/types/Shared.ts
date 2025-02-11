export namespace Shared {
  export interface User {
    id: string
    username: string
    role: string
  }
  export interface UserWithStatistic extends User {
    statistic: {
      snippetsCount: number
      rating: number
      commentsCount: number
      likesCount: number
      dislikesCount: number
      questionsCount: number
      correctAnswersCount: number
      regularAnswersCount: number
    }
  }
  export interface Comment {
    id: string
    content: string
  }
  export interface CommentWithUser extends Comment {
    user: User
  }
}
