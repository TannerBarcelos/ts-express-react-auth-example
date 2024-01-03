import { Request, Response, NextFunction } from 'express'
import { JwtTokenUtils } from '../utils/token'

function parseTokenFromHeader(req: Request) {
  const authorizationHeader = req.headers.authorization
  const token = authorizationHeader?.split(' ')[1]
  return token
}

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = parseTokenFromHeader(req)

  if (!token) {
    return res.sendStatus(401)
  }

  JwtTokenUtils.verify(token, (err: any, user: any) => {
    if (err) {
      return res.sendStatus(403)
    }
    //@ts-ignore
    req.user = user
    next()
  })
}
