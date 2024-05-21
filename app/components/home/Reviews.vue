<template>
  <section class="container">
    <h2 class="text-5xl text-center font-extrabold mt-[100px]">
      ОТЗЫВЫ
    </h2>
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
      :slides-per-view="4"
      :grab-cursor="true"
      :navigation="{
        prevEl: '.prev',
        nextEl: '.next',
      }"
      :breakpoints="data.breakpoints"
    >
      <SwiperSlide v-for="(slide, index) in 5" :key="index">
        <div
          :data-aos-duration="index * 200 + 500"
          :data-aos-delay="index * 200 + 150"
          data-aos="fade"
          class="tariffs-wrapper__tarrifs"
        >
          <ReviewsCard />
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import ReviewsCard from '~/app/components/home/UI/Reviews/ReviewsCard.vue'
const data = reactive({
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: -5
    },
    330: {
      slidesPerView: 1,
      spaceBetween: -10
    },
    365: {
      slidesPerView: 1,
      spaceBetween: -26
    },
    424: {
      slidesPerView: 1,
      spaceBetween: -50
    },
    450: {
      slidesPerView: 1,
      spaceBetween: -50
    },
    550: {
      slidesPerView: 1,
      spaceBetween: -100
    },
    644: {
      slidesPerView: 1,
      spaceBetween: -150
    },
    720: {
      slidesPerView: 2,
      spaceBetween: -20
    },
    950: {
      slidesPerView: 2,
      spaceBetween: -100
    },
    1085: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1380: {
      slidesPerView: 3,
      spaceBetween: -10
    },
    1381: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  }
})
</script>

<style scoped>

</style>
