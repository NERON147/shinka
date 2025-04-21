// server/middleware/rateLimiter.ts
const rateLimitMap = new Map<string, number[]>()

export function rateLimiter (ip: string, limit = 5, windowMs = 120_000): boolean {
  const now = Date.now()
  const timestamps = rateLimitMap.get(ip) || []

  // Фильтруем только те, что попадают в окно времени
  const updatedTimestamps = timestamps.filter(ts => now - ts < windowMs)

  // Проверка лимита
  if (updatedTimestamps.length >= limit) {
    return false
  }

  updatedTimestamps.push(now)
  rateLimitMap.set(ip, updatedTimestamps)
  return true
}
