import express from 'express'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import routes from './routes'
import { APP_PORT, API_VERSION } from './config'

const app = express()

app.use(cookieParser())
app.use(express.json())

app.use(`/api/${API_VERSION}`, routes)

app.listen(APP_PORT, () => {
  console.log(`Server listening on port ${APP_PORT}`)
})
