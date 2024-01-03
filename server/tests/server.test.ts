import request from 'supertest'
import { expect, test } from '@jest/globals'
import { ExpressFactory } from '../src/lib/ExpressFactory'

const app = new ExpressFactory().getApp()

test('It should respond with a 200 status code', async () => {
  const response = await request(app).get('/api/v1/ping')
  expect(response.statusCode).toBe(200)
  expect(response.body).toStrictEqual({ message: 'pong' })
})
