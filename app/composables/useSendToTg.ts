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
      .then(() => {
      })
      .catch(() => {
      })
  }

  return {
    sendMessageCall
  }
}
