import { defineEventHandler, readBody, getRequestIP, createError } from 'h3'
import { rateLimiter } from './middleware/rateLimiter'

export default defineEventHandler(async (event) => {
  const ip = getRequestIP(event) || 'unknown'

  // Ограничение: 5 запросов в 2 минуты
  if (!rateLimiter(ip, 5, 120_000)) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too Many Requests',
      data: {
        error: 'Превышен лимит запросов. Попробуйте позже.'
      }
    })
  }

  const body = await readBody(event)
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.CHAT_ID

  if (!token || !chatId) {
    return { error: 'Missing Telegram credentials' }
  }

  try {
    const res = await $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: chatId,
        parse_mode: 'html',
        text: body.text
      }
    })

    return { status: 'ok', telegramResponse: res }
  } catch (err: any) {
    console.error('Telegram API error:', err.data || err.message)
    return { error: 'Failed to send message', details: err.data || err.message }
  }
})
