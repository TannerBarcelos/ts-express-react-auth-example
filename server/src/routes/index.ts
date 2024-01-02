import { Router } from 'express'
import authRoutes from './auth'
import protectedRoutes from './protected'
import { authenticateToken as authCheck } from '@/middleware/auth'

const router = Router()

router.get('/ping', (req, res) => {
  res.send('Hello World!')
})

router.use('/auth', authRoutes)
router.use('/protected', authCheck, protectedRoutes)

export default router
