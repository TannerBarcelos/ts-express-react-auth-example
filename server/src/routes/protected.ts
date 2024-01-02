// routes/protected.ts
import express, { Request, Response } from 'express'
import { authenticateToken } from '../middleware/auth'

const router = express.Router()

router.get(
  '/protected-resource',
  authenticateToken,
  (req: Request, res: Response) => {
    // Your protected resource logic here
    res.json({ message: 'This is a protected resource.' })
  },
)

export default router
