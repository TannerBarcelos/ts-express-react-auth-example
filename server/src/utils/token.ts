import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config'

const defaultOptions: jwt.SignOptions = { expiresIn: '10s' }

export class JwtTokenUtils {
  static generate(payload: any, options: jwt.SignOptions = defaultOptions) {
    return jwt.sign(payload, JWT_SECRET, options)
  }

  static verify(token: string, cb: jwt.VerifyCallback) {
    return jwt.verify(token, JWT_SECRET, cb)
  }
}
