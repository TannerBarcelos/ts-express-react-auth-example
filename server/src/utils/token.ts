import jwt from 'jsonwebtoken'
import {
  JWT_SECRET,
  ACCESS_TOKEN_EXPIRATION,
  REFRESH_TOKEN_EXPIRATION,
} from '../config'

export function generateAccessToken(user: any) {
  return jwt.sign(user, JWT_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRATION })
}

export function generateRefreshToken(user: any) {
  return jwt.sign(user, JWT_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRATION })
}
