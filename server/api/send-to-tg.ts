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

  const { question = 'Дозвонились?', options = ['Да', 'Нет'] } = body

  const chatId = process.env.CHAT_ID
  const token = process.env.TELEGRAM_BOT_TOKEN

  if (!token || !chatId) {
    return {
      error: 'Missing Telegram token or chat ID'
    }
  }

  try {
    // Отправка сообщения
    const messageRes = await $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: chatId,
        parse_mode: 'html',
        text: '<b> Возможен звонок с сайта </b>',
        disable_notification: true,
        is_anonymous: false
      }
    })

    console.log('Message sent:', messageRes)

    // Отправка опроса
    const pollRes = await $fetch(`https://api.telegram.org/bot${token}/sendPoll`, {
      method: 'POST',
      body: {
        chat_id: chatId,
        question,
        options, // массив строк
        type: 'regular',
        disable_notification: true
      }
    })

    console.log('Poll sent:', pollRes)

    return { status: 'ok' }
  } catch (error: any) {
    console.error('Telegram API error:', error.data || error.message)
    return {
      error: 'Telegram API call failed',
      details: error.data || error.message
    }
  }
})
