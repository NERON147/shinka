<template>
  <article>
    <section class="bg-img">
      <div class="container">
        <h1>
          <div class="text-white max-sxxs:text-[25px] max-ss:text-[30px] max-ss:font-extrabold max-sm:text-[50px] max-md:text-[60px] text-[70px] font-bold mt-32 max-ss:leading-[50px] max-sm:leading-[60px] max-md:leading-[75px] leading-[90px]">
            ШИНОМОНТАЖ, СТО <br>
            <span class="text-[#b87a3c]">
              РЕМ. РАБОТЫ ЛЕГКОВЫХ
            </span> <br> АВТОМОБИЛЕЙ В ГАТЧИНЕ
          </div>
          <div class="text-white font-light text-2xl tracking-[3px] mt-10">
            Полный комплекс шиномонтажных <br>
            работ от профессионалов
          </div>
        </h1>
        <div class="mt-24 flex gap-10 !font-light max-ss:flex-wrap">
          <Button
            label="Оставить заявку"
            class="bg-[#b87a3c] border-[#b87a3c] h-12 hover:bg-[#946435] hover:border-[#946435] max-ss:w-full"
            plain
          />
          <Button
            label="Написать в Whatsapp"
            class="text-white border-white h-12 hover:border-[#bbbbbb] max-ss:w-full"
            outlined
          />
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
</script>

<style scoped></style>
