import { Request, Response, Router as ProtectedRouter } from 'express'

const protectedRouter = ProtectedRouter()

protectedRouter.get('/protected-resource', (req: Request, res: Response) => {
  res.json({ message: 'This is a protected resource.' })
})

export default protectedRouter
