import Bull from 'bull'

export const renderQueue = new Bull(
  'render-queue',
  process.env.REDIS_URL as string
)
