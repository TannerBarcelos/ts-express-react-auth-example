import { Request, Response, NextFunction } from 'express'
import { JwtTokenUtils } from '../utils/token'

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1] // Bearer <token>

  if (!token) {
    return res.sendStatus(401)
  }

  JwtTokenUtils.verify(token, (err: any, user: any) => {
    if (err) {
      return res.sendStatus(403)
    }

    // @ts-ignore
    req.user = user

    next()
  })
}
