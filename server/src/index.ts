import 'dotenv/config'
import { APP_PORT } from './config'
import { ExpressFactory } from './lib/ExpressFactory'

const app = new ExpressFactory().getApp()

app.listen(APP_PORT, () => {
  console.log(`Server listening on port ${APP_PORT}`)
})
