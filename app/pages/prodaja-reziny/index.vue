<template>
  <main class="container">
    <h1 class="font-bold text-4xl mt-40 text-center">
      Продажа резины
    </h1>
    <img src="/assets/img/noviye-shiny.jpg" alt="" class="rounded-3xl max-sm:h-auto h-[400px] w-auto m-auto my-10">
    <p class="text-4xl mb-10 font-bold text-center">
      У нас огромный выбор шин на любой вкус, свяжитесь с нами и наш специлист подберет для Вас самый лучший и выгодный вариант!
    </p>
    <div class="flex justify-center my-10">
      <Button
        label="Связаться"
        class="bg-[#b87a3c] border-[#b87a3c] h-12 hover:bg-[#946435] hover:border-[#946435]"
        plain
        @click="anhcorScroll('footer')"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { anhcorScroll } from '@/app/helpers/anhcorScroll'
definePageMeta({
  layout: 'other-page'
})

useSeoMeta({
  title: 'Шиномонтаж, СТО  Рем. работы легковых автомобилей в Гатчине',
  ogTitle: 'Шиномонтаж, СТО  Рем. работы легковых автомобилей в Гатчине',
  description: 'Приобретите резину в Wheel Center GTN по приятной цене...',
  ogDescription: 'Приобретите резину в Wheel Center GTN по приятной цене...',
  ogType: 'website',
  ogImage: '/assets/img/stoSEO.jpg',
  ogUrl: `${process.client ? window.location.origin : ''}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Шиномонтаж, СТО  Рем. работы легковых автомобилей в Гатчине',
  twitterDescription: 'Приобретите резину в Wheel Center GTN по приятной цене...',
  twitterImage: '/assets/img/stoSEO.jpg'
})
</script>

<style scoped>

</style>
