import { RequestHandler } from 'express'

declare global {
  namespace Express {
    interface Request {
      token: string
      cliente: IScenario
    }
  }

  namespace NodeJS {
    interface Process {
      PORT: number
    }
  }

  interface IRoute {
    method: IMethod
    path: string
    action: IRequestHandler
    middleware?: Function[]
    priority?: number
  }

  interface IRequestHandler extends RequestHandler {}

  type IMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

  interface IRoute {
    method: IMethod
    path: string
    action: RequestHandler
    middleware?: Function[]
    priority?: number
  }

  interface IScenario {
    nome: string
  }
}
