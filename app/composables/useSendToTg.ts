import { useToast } from 'primevue/usetoast'

export function useSendToTg () {
  const toast = useToast()
  const sendMessageCall = async () => {
    await $fetch('/api/send-to-tg', {
      method: 'POST',
      body: {
        question: 'Дозвонились?',
        options: ['Да', 'Нет']
      }
    })
      .catch((error) => {
        if (error.message.includes('Missing Telegram token or chat ID')) {
          return
        }
        toast.add({ severity: 'error', summary: 'Ошибка!', detail: error?.data?.data?.error ?? error.message, group: 'bl', life: 6000 })
      })
  }

  return {
    sendMessageCall
  }
}
