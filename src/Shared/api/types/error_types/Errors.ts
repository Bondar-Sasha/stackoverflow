export namespace Errors {
  export interface ErrorWithData {
    status: number
    data: {
      endpoint: string
      message: string
      statusCode: number
    }
  }
  export interface SimpleError {
    statusCode: number
    endpoint: string
    message: string
  }
}
