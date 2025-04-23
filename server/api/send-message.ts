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

  const config = useRuntimeConfig()
  const token = config.telegramBotToken
  const chatId = config.chatId

  const body = await readBody(event)

  if (!token || !chatId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing Telegram token or chat ID',
      data: {
        error: 'Missing Telegram token or chat ID'
      }
    })
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
