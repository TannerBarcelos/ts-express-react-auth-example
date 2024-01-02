// routes/auth.ts
import express, { Request, Response } from 'express'
import { generateAccessToken, generateRefreshToken } from '@utils/token'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '@config'

const router = express.Router()

router.post('/login', (req: Request, res: Response) => {
  const user = req.body

  if (!user) {
    return res.sendStatus(401)
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

    const tokenUser = user

    // We should not include iat and exp in the new accessToken generation function because they are automatically generated by the jwt.sign function
    delete tokenUser.iat
    delete tokenUser.exp

    const accessToken = generateAccessToken(tokenUser)

    res.json({ accessToken })
  })
})

export default router
