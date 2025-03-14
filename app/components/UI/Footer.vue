<template>
  <section class="bg-gradient-to-r from-black to-slate-900 relative h-[696px] max-ss:h-auto">
    <div class="container text-white flex max-sxxs:h-full h-full items-center">
      <div class="max-md:w-full w-1/2">
        <p class="max-ss:text-xl text-2xl mt-10">
          Оставьте заявку или <a :href="'tel:+79046474725'" class="text-[#b87a3c]" @click="sendMessageCall">позвоните</a>  прямо сейчас
        </p>
        <div class="mt-10 flex flex-col gap-5">
          <FloatLabel>
            <InputText id="username" v-model="data.name" class="max-ss:w-full w-[500px] h-[50px]" :invalid="v$.name.$error" />
            <label for="username">ФИО</label>
          </FloatLabel>
          <FloatLabel>
            <InputMask
              id="phone"
              v-model="data.phone"
              class="max-ss:w-full w-[500px] h-[50px]"
              mask="+7 (999) 999 99 99"
              placeholder="99-999999"
              :invalid="v$.phone.$error"
            />
            <label for="phone">Телефон</label>
          </FloatLabel>
          <Button
            label="Оставить заявку"
            class="bg-[#b87a3c] border-[#b87a3c] h-12 hover:bg-[#946435] hover:border-[#946435] max-ss:w-full w-[500px]"
            plain
            :loading="data.loader"
            @click="sendMessage"
          />
          <nuxt-link to="privacy" class="text-nowrap mt-auto underline underline-offset-2">Политика конфиденциальности</nuxt-link>
          <div class="flex align-items-center mt-10">
            <Checkbox v-model="data.apply" input-id="box" :value="true" :invalid="v$.apply.$error" />
            <label for="box" class="ml-2"> Нажимая на кнопку "Оставить заявку", Вы подтверждаете, что ознакомлены с Политикой обработки и обеспечения безопасности персональных данных и даете свое согласие на обработку Персональных данных.
            </label>
          </div>
        </div>
      </div>
      <div id="footer">
        <img src="/assets/img/shina.png" alt="" class="absolute right-0 top-0 max-md:hidden">
      </div>
    </div>
    <Toast position="bottom-left" group="bl" />
  </section>
</template>

<script setup lang="ts">
import axios from 'axios'
import { useToast } from 'primevue/usetoast'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useSendToTg } from '~/app/composables/useSendToTg'

const { sendMessageCall } = useSendToTg()

const toast = useToast()
const data = reactive({
  name: '',
  phone: '',
  apply: false,
  loader: false
})

const isTrue = (value: any) => value.includes(true)

const rules = {
  name: { required },
  phone: { required },
  apply: { required, isTrue }
}

const v$ = useVuelidate(rules, data)

const sendMessage = async () => {
  v$.value.$validate()
  if (v$.value.name.$error || v$.value.phone.$error) {
    toast.add({ severity: 'error', summary: 'Ошибка!', detail: 'Заполните все обязатльные поля!', group: 'bl', life: 6000 })
  } else if (v$.value.apply.$error) {
    toast.add({ severity: 'warn', summary: 'Внимание!', detail: 'Ознакомьтесь и поставьте галочку, что Вы ознакомлены с Политикой обработки персональных данных', group: 'bl', life: 6000 })
  } else {
    data.loader = true
    const orderToTG = `
  <b> Новая заявка: </b> \n
  <b> Имя: </b>  ${data.name}
  <b> Телефон: </b>  ${data.phone} \n 
  `
    const chatId = '-1002238302043'
    await axios.post('https://api.telegram.org/bot7282294081:AAFefQZH9b4CxTQeUv1RPbIBduUnoqTbrVk/sendMessage', {
      chat_id: chatId,
      parse_mode: 'html',
      text: orderToTG
    })
      .then(() => {
        data.name = ''
        data.phone = ''
        data.apply = false
        v$.value.$reset()
        data.loader = false
        toast.add({ severity: 'success', summary: 'Успешно!', detail: 'Заявка отправлена успешно, в ближайшее время наш сотрудник Вам перезвонит, спасибо за доверие!', group: 'bl', life: 6000 })
      })
      .catch(() => {
        data.loader = false
        toast.add({ severity: 'error', summary: 'Ошибка!', detail: 'Упс, произошла ошибка, попробуйте еще раз через некоторе время, либо позвоните нам сами!', group: 'bl', life: 6000 })
      })
  }
}
</script>

<style scoped>

</style>
