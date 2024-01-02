import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/protected-resource', (req: Request, res: Response) => {
  res.json({ message: 'This is a protected resource.' })
})

export default router
