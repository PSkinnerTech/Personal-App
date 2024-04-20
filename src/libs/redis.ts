import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://us1-gentle-cow-42605.upstash.io',
  token: process.env.REDIS_KEY!,
})