<template>
  <section id="reviews" class="bg-gray-200 pb-20">
    <div class="container">
      <h2 class="max-sxxs:text-2xl max-sm:text-3xl max-md:text-4xl text-5xl text-center font-extrabold pt-[100px] pt-20 mb-5">
        РЕАЛЬНЫЕ ОТЗЫВЫ
      </h2>
      <img src="/public/assets/img/horochee-mesto.png" alt="mesto" class="w-[100px] mx-auto mb-5">

      <div style="max-width:560px;height:800px;overflow:hidden;position:relative;" class="mx-auto">
        <iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/11583592634?comments" />
        <a href="https://yandex.ru/maps/org/usadba_izmaylovo/226327670406/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0">Шинный центр на карте — Яндекс.Карты</a>
      </div>
      <div class="flex justify-center mt-10">
        <Button
          label="Оставить заявку"
          class="bg-[#b87a3c] border-[#b87a3c] h-12 hover:bg-[#946435] hover:border-[#946435]"
          plain
          @click="anhcorScroll('footer')"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { anhcorScroll } from '@/app/helpers/anhcorScroll'
</script>

<style scoped>

</style>
