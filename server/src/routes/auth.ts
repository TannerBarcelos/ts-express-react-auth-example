import { Request, Response, Router as AuthRouter } from 'express'
import { JwtTokenUtils } from '../utils/token'
import { REFRESH_TOKEN_EXPIRATION } from '../config'

const authRouter = AuthRouter()

authRouter.post('/login', (req: Request, res: Response) => {
  const user = req.body

  if (!user) {
    return res.sendStatus(401)
  }

  const accessToken = JwtTokenUtils.generate(user)
  const refreshToken = JwtTokenUtils.generate(user, {
    expiresIn: REFRESH_TOKEN_EXPIRATION,
  })

  // Store refreshToken securely, e.g., in a cookie or database
  res.cookie('refreshToken', refreshToken, { httpOnly: true })

  res.json({ accessToken })
})

authRouter.post('/refresh-token', (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken

  if (!refreshToken) {
    return res.sendStatus(401)
  }

  JwtTokenUtils.verify(refreshToken, (err: any, user: any) => {
    if (err) {
      return res.sendStatus(403)
    }

    const tokenUser = user

    delete tokenUser.iat
    delete tokenUser.exp

    const accessToken = JwtTokenUtils.generate(tokenUser)

    res.json({ accessToken })
  })
})

export default authRouter
