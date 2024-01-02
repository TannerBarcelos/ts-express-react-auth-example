// routes/auth.ts
import express, { Request, Response } from 'express'
import { generateAccessToken, generateRefreshToken } from '../utils/token'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config'

const router = express.Router()

router.post('/login', (req: Request, res: Response) => {
  // Authenticate user and get user data
  const user = {
    /* User data here */
  }

  const accessToken = generateAccessToken(user)
  const refreshToken = generateRefreshToken(user)

  // Store refreshToken securely, e.g., in a cookie or database
  res.cookie('refreshToken', refreshToken, { httpOnly: true })

  res.json({ accessToken })
})

router.post('/refresh-token', (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken

  if (!refreshToken) {
    return res.sendStatus(401)
  }

  jwt.verify(refreshToken, JWT_SECRET, (err: any, user: any) => {
    if (err) {
      return res.sendStatus(403)
    }

    const accessToken = generateAccessToken(user)
    res.json({ accessToken })
  })
})

export default router
