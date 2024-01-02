import { Router } from 'express'
import authRoutes from './auth'
import protectedRoutes from './protected'

const router = Router()

// This is a test route to make sure the server is working
router.get('/ping', (req, res) => {
  res.send('Hello World!')
})

router.use('/auth', authRoutes)
router.use('/protected', protectedRoutes)

export default router
