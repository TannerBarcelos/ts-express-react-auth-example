import express from 'express'
import 'dotenv/config'
import appRoutes from './routes'

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000
const API_VERSION = process.env.API_VERSION || 'v100'

app.use(`/api/${API_VERSION}`, appRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
