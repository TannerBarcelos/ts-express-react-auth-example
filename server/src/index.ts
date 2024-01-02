import express from 'express'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import routes from './routes'

const app = express()

app.use(cookieParser())
app.use(express.json())

const PORT = process.env.PORT || 3000
const API_VERSION = process.env.API_VERSION || 'v1'

app.use(`/api/${API_VERSION}`, routes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
