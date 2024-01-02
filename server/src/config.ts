export const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey'
export const ACCESS_TOKEN_EXPIRATION =
  process.env.ACCESS_TOKEN_EXPIRATION || '15m' // 15 minutes
export const REFRESH_TOKEN_EXPIRATION =
  process.env.REFRESH_TOKEN_EXPIRATION || '7d' // 7 days
