<template>
  <article>
    <section class="">
      <img src="/assets/img/manwheel.webp" class="absolute top-0 left-0 w-full h-screen min-h-[900px] max-sm:min-h-[1100px] object-cover -z-10" alt="Image description">
      <div class="container">
        <h1>
          <div class="text-white max-sxxs:text-[25px] max-ss:text-[30px] max-ss:font-extrabold max-sm:text-[50px] max-md:text-[60px] text-[70px] font-bold pt-[220px] max-ss:зt-[180px] max-ss:leading-[50px] max-sm:leading-[60px] max-md:leading-[75px] leading-[90px]">
            ШИНОМОНТАЖ, СТО <br>
            <span class="text-[#b87a3c]">
              РЕМ. РАБОТЫ ЛЕГКОВЫХ
            </span> <br> АВТОМОБИЛЕЙ В ГАТЧИНЕ
          </div>
          <div class="text-white font-light text-2xl tracking-[3px] mt-10">
            Полный комплекс услуг <span class="text-[#e69443] font-extrabold cursor-pointer" @click="anhcorScroll('prices')">шиномонтажа</span> и <br> <nuxt-link to="sto"><span class="text-[#e69443] font-extrabold">обслуживания автомобиля</span></nuxt-link> <br> от профессионалов
          </div>
        </h1>
        <div class="mt-24 flex gap-10 max-ss:gap-5 !font-light max-ss:flex-wrap items-center">
          <Button
            label="Оставить заявку"
            class="bg-[#b87a3c] border-[#b87a3c] h-12 hover:bg-[#946435] hover:border-[#946435] max-ss:w-full"
            plain
            @click="anhcorScroll('footer')"
          />
          <Button
            class="text-white border-white h-12 hover:border-[#bbbbbb] max-ss:w-fit max-ss:mx-auto max-xs:mt-5"
            outlined
            @click="openWhatsUp"
          >
            Написать в Whatsapp <img src="/assets/img/wh.svg" alt="" class="ml-2  w-[25px]">
          </Button>
          <Button
            class="text-white border-white h-12 hover:border-[#bbbbbb] max-ss:w-fit max-ss:mx-auto"
            outlined
            @click="openTg"
          >
            Написать в Telegram <img src="/assets/img/tg.svg" alt="" class="ml-2 w-[25px]">
          </Button>
          <Button
            class="text-white border-white h-12 hover:border-[#bbbbbb] max-ss:w-fit max-ss:mx-auto max-ss:block hidden min-w-[240px] w-fit"
            outlined
            @click="openCall"
          >
            Позвонить
          </Button>
        </div>
      </div>
    </section>
    <SpecialOffers />
    <WhyUsVue />
    <main>
      <Services />
      <Price />
    </main>
    <Reviews />
    <FAQ />
    <FindUs />
    <div class="fixed right-5 bottom-5 flex gap-2.5 z-10 max-sm:hidden">
      <li class="pi pi-arrow-circle-up text-4xl text-primary2 hover:scale-110 transition-all cursor-pointer" @click="scrollToTop" />
      <li class="pi pi-arrow-circle-down text-4xl text-primary2 hover:scale-110 transition-all cursor-pointer" @click="scrollToBottom" />
    </div>
  </article>
</template>

<script setup lang="ts">
import SpecialOffers from '~/app/components/home/SpecialOffers.vue'
import WhyUsVue from '~/app/components/home/WhyUs.vue'
import Services from '~/app/components/home/Services.vue'
import Price from '~/app/components/home/Price.vue'
import Reviews from '~/app/components/home/Reviews.vue'
import FAQ from '~/app/components/home/FAQ.vue'
import FindUs from '~/app/components/home/FindUs.vue'
import { scrollToTop, scrollToBottom } from '@/app/helpers/scrollTo'
import { anhcorScroll } from '@/app/helpers/anhcorScroll'
import { useSendToTg } from '~/app/composables/useSendToTg'

const { sendMessageCall } = useSendToTg()
useSeoMeta({
  title: 'Шиномонтаж, СТО Автосервисные работы легковых автомобилей в Гатчине',
  ogTitle: 'Шиномонтаж, СТО Автосервисные работы легковых автомобилей в Гатчине',
  description: 'Шиномонтаж, техническое обслуживание, автосервис, замена масла и ремонт авто в Гатчине по приятным ценам',
  ogDescription: 'Шиномонтаж, техническое обслуживание, автосервис, замена масла и ремонт авто в Гатчине по приятным ценам',
  ogType: 'website',
  ogImage: '/assets/img/stoSEO.jpg',
  ogUrl: `${process.client ? window.location.origin : ''}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Шиномонтаж, техническое обслуживание, автосервис, замена масла и ремонт авто в Гатчине по приятным ценам',
  twitterDescription: 'Шиномонтаж, техническое обслуживание, автосервис, замена масла и ремонт авто в Гатчине по приятным ценам',
  twitterImage: '/assets/img/stoSEO.jpg'
})

const openWhatsUp = () => {
  window.open('https://api.whatsapp.com/send?phone=79046474725')
}
const openTg = () => {
  window.open('https://t.me/+79046474725')
}

const openCall = () => {
  const phoneLink = document.createElement('a')
  phoneLink.href = 'tel:+79681856015'
  phoneLink.style.display = 'none'
  document.body.appendChild(phoneLink)
  phoneLink.click()
  document.body.removeChild(phoneLink)
  sendMessageCall()
}
</script>

<style scoped></style>
