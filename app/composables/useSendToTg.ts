import axios from 'axios'

export function useSendToTg () {
  const sendMessageCall = async () => {
    const orderToTG = `
    <b> Возможен звонок с сайта </b>
    `
    const chatId = '-1002238302043'
    await axios.post('https://api.telegram.org/bot7282294081:AAFefQZH9b4CxTQeUv1RPbIBduUnoqTbrVk/sendMessage', {
      chat_id: chatId,
      parse_mode: 'html',
      text: orderToTG,
      disable_notification: true
    })
    const question = 'Дозвонились?' // Вопрос опроса
    const options = JSON.stringify(['Да', 'Нет'])// Варианты ответов

    await axios.post(
      'https://api.telegram.org/bot7282294081:AAFefQZH9b4CxTQeUv1RPbIBduUnoqTbrVk/sendPoll',
      {
        chat_id: chatId,
        question,
        options,
        type: 'regular', // Обычный опрос
        disable_notification: true
      }
    )
  }

  return {
    sendMessageCall
  }
}
