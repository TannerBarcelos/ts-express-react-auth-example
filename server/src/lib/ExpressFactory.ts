import express from 'express'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import routes from '../routes'
import { API_VERSION } from '../config'

export const ServerCreator = () => {
  const app = express()
  app.use(cookieParser())
  app.use(express.json())

  app.use(`/api/${API_VERSION}`, routes)
  return app
}

export class ExpressFactory {
  private app: express.Application
  constructor() {
    this.app = ServerCreator()
  }
  public getApp() {
    return this.app
  }
}
