export namespace QuestionsTypes {
  export interface GetQuestionsRequest {
    page: number
    limit: number
  }
  interface Question {
    id: string
    title: string
    description: string
    attachedCode: string
    answers: []
    user: {
      id: string
      username: string
      role: string
    }
    isResolved: boolean
  }
  export interface GetQuestionsResponse {
    data: Question[]
  }

  export interface CreateQuestionRequest {
    title: string
    description?: string
    attachedCode?: string
  }
  export interface CreateQuestionResponse {
    data: {
      title: string
      description: string
      attachedCode: string
      user: {
        id: string
        username: string
        role: string
      }
      id: string
    }
  }
  export interface GetQuestionRequest {
    id: number
  }
  export interface GetQuestionResponse {
    data: Question
  }
  export interface EditQuestionRequest {
    id: number
    title: string
    description?: string
    attachedCode?: string
  }
  export interface EditQuestionResponse {
    data: {
      title: string
      description: string
      attachedCode: string
      user: {
        id: string
        username: string
        role: string
      }
      id: string
    }
  }
}
