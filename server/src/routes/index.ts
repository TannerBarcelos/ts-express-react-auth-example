import { Router as RootRouter } from 'express'
import authRoutes from './auth'
import protectedRoutes from './protected'
import { authenticateToken as authCheck } from '../middleware/auth'

const rootRouter = RootRouter()

rootRouter.get('/ping', (req, res) => {
  res.send('Hello World!')
})

rootRouter.use('/auth', authRoutes)
rootRouter.use('/protected', authCheck, protectedRoutes)

export default rootRouter
