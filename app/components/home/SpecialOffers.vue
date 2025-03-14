<template>
  <section id="special" class="container">
    <div class="max-ss:mt-[200px] max-md:mt-[300px] mt-[250px]">
      <h2 class="max-sxxs:text-2xl max-sm:text-3xl max-md:text-4xl text-5xl text-center font-extrabold text-[#b87a3c]">
        СПЕЦПРЕДЛОЖЕНИЯ
      </h2>
      <div class="flex mt-20 justify-center gap-20 max-sm:flex-wrap">
        <div class="w-[600px] h-[400px] relative max-sxxs:pt-[30px] max-xxs:pt-[50px] pt-[100px] p-[30px] rounded-lg cursor-pointer" @mouseover="data.hover = true" @mouseout="data.hover = false">
          <img src="/assets/img/chron.webp" alt="" class="absolute top-0 right-0 brightness-50 w-[600px] h-[400px] object-cover -z-10 rounded-lg">
          <h3>
            <p class="max-xxs:w-full w-[330px]">
              <span class="text-primary2 text-5xl font-extrabold text-shadow">
                Скидка 50%
              </span>
              <span class="text-white text-5xl font-medium text-shadow">
                на сезонное  хранение <br>
              </span>
            </p><p class="text-white text-xl mt-5 text-shadow">
              при покупке комплекта <br> шин или дисков
            </p>
            <!-- <p class="text-white text-xl mt-5 flex gap-3 items-center text-shadow transition-all" :class="{'text-primary': data.hover}">
              Подробнее <ArrowLongRightIcon class="h-8 transition-all" :class="{'translate-x-7': data.hover}" />
            </p> -->
          </h3>
        </div>
        <div class="max-xxs:w-full w-[600px] h-[400px] relative max-sxxs:pt-[30px] max-xxs:pt-[50px] pt-[100px] p-[30px] rounded-lg cursor-pointer" @mouseover="data.hover2 = true" @mouseout="data.hover2 = false">
          <img src="/assets/img/shinomontazh.jpg" alt="" class="absolute top-0 right-0 brightness-50 w-[600px] h-[400px] object-cover -z-10 rounded-lg">
          <h3>
            <p class="">
              <span class="text-primary2 max-sxxs:text-4xl text-5xl font-extrabold text-shadow">
                Бесплатная проверка <br>
              </span>
              <span class="text-white max-md:text-2xl text-5xl font-medium text-shadow">
                колес на геометрию <br>
                и балансировку <br>
              </span>
            </p><p class="text-white text-xl max-md:mt-2 mt-5 text-shadow">
              <br>
              c 1 марта по 30 июня 2025 г.
            </p>
            <!-- <p class="text-white text-xl mt-5 flex gap-3 items-center text-shadow transition-all" :class="{'text-primary': data.hover2}">
              Подробнее <ArrowLongRightIcon class="h-8 transition-all" :class="{'translate-x-7': data.hover2}" />
            </p> -->
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'

const data = reactive({
  hover: false,
  hover2: false
})

</script>

<style scoped></style>
