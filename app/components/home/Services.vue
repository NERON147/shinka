<template>
  <section class="container !max-w-[1125px]">
    <h2 class="text-5xl text-center font-extrabold mt-[100px]">
      СПЕЦПРЕДЛОЖЕНИЯ
    </h2>
    <div class="flex gap-16 justify-center mt-20">
      <div class="bg-[#262626] p-8 rounded-xl col-span-3 w-fit" @mouseover="data.hover = true" @mouseout="data.hover = false">
        <p class="mt-5 flex gap-2 items-center">
          <span class="text-gray-500 text-sm">
            01
          </span>
          <span class="font-bold text-2xl text-white">
            Шиномонтаж R14-R22 <br>
          </span>
        </p>
        <div class="mt-2">
          <p class="text-white text-xl mt-5 flex gap-3 items-center text-shadow transition-all" :class="{'!text-primary': data.hover}">
            Подробнее <ArrowLongRightIcon class="h-8 transition-all" :class="{'translate-x-7': data.hover}" />
          </p>
        </div>
        <img src="/assets/img/kolesa.png" alt="kolesa" width="300" class="mt-20">
      </div>
      <div class="flex flex-col gap-10">
        <div class="bg-[#f5f5f5] p-8 rounded-xl col-span-3 w-fit flex max-w-[700px]" @mouseover="data.hover = true" @mouseout="data.hover = false">
          <div>
            <p class="mt-5 flex gap-2 items-center">
              <span class="text-gray-500 text-sm">
                02
              </span>
              <span class="font-bold text-2xl">
                Продажа новой и б/у <br>
                резины и дисков
              </span>
            </p>
            <div class="mt-2">
              <p class=" text-xl mt-5 flex gap-3 items-center transition-all" :class="{'text-primary': data.hover}">
                Подробнее <ArrowLongRightIcon class="h-8 transition-all" :class="{'translate-x-7': data.hover}" />
              </p>
            </div>
          </div>

          <img src="/assets/img/kolesa-bez-diska.png" alt="kolesa-bez-diska" width="210" class="ml-[135px]">
        </div>
        <div class="bg-primary2 rounded-xl col-span-3 w-fit flex max-w-[700px] overflow-hidden" @mouseover="data.hover = true" @mouseout="data.hover = false">
          <div class="p-8">
            <p class="mt-5 flex gap-2 items-center">
              <span class="text-gray-500 text-sm">
                03
              </span>
              <span class="font-bold text-2xl">
                Балансировка колес <br>
              </span>
            </p>
            <div class="mt-2">
              <p class=" text-xl mt-5 flex gap-3 items-center transition-all" :class="{'text-primary': data.hover}">
                Подробнее <ArrowLongRightIcon class="h-8 transition-all" :class="{'translate-x-7': data.hover}" />
              </p>
            </div>
          </div>

          <img src="/assets/img/klych.png" alt="klych" width="360" class="-mr-[10px]">
        </div>
      </div>
    </div>
    <div class="flex gap-16 justify-center mt-20">
      <div class="flex flex-col gap-10">
        <div class="bg-[#f5f5f5] rounded-xl col-span-3 w-fit flex max-w-[700px] overflow-hidden" @mouseover="data.hover = true" @mouseout="data.hover = false">
          <div class="p-8">
            <p class="mt-5 flex gap-2 items-center">
              <span class="text-gray-500 text-sm">
                04
              </span>
              <span class="font-bold text-2xl">
                Сезонное хранение резины<br>
              </span>
            </p>
            <div class="mt-2">
              <p class=" text-xl mt-5 flex gap-3 items-center transition-all" :class="{'text-primary': data.hover}">
                Подробнее <ArrowLongRightIcon class="h-8 transition-all" :class="{'translate-x-7': data.hover}" />
              </p>
            </div>
          </div>

          <img src="/assets/img/hranenenie.png" alt="hranenenie" width="350">
        </div>
        <div class="bg-[#d4d4d4] rounded-xl col-span-3 w-fit flex max-w-[700px] overflow-hidden" @mouseover="data.hover = true" @mouseout="data.hover = false">
          <div class="p-8">
            <p class="mt-5 flex gap-2 items-center">
              <span class="text-gray-500 text-sm">
                05
              </span>
              <span class="font-bold text-2xl">
                Перебортовка колес<br>
              </span>
            </p>
            <div class="mt-2">
              <p class=" text-xl mt-5 flex gap-3 items-center transition-all" :class="{'text-primary': data.hover}">
                Подробнее <ArrowLongRightIcon class="h-8 transition-all" :class="{'translate-x-7': data.hover}" />
              </p>
            </div>
          </div>

          <img src="/assets/img/perebortovka.png" alt="perebortovka" width="370" class="ml-[100px]">
        </div>
      </div>
      <div class="bg-[#262626] rounded-xl col-span-3 w-fit h-[440px] relative" @mouseover="data.hover = true" @mouseout="data.hover = false">
        <div class="px-[75px] py-[20px]">
          <p class="mt-5 flex gap-2 items-center">
            <span class="text-gray-500 text-sm">
              06
            </span>
            <span class="font-bold text-2xl text-white">
              Ремонт дисков <br>
            </span>
          </p>
          <div class="mt-2">
            <p class="text-white text-xl mt-5 flex gap-3 items-center text-shadow transition-all" :class="{'!text-primary': data.hover}">
              Подробнее <ArrowLongRightIcon class="h-8 transition-all" :class="{'translate-x-7': data.hover}" />
            </p>
          </div>
        </div>

        <img src="/assets/img/disk.png" alt="disk" width="270" class="absolute bottom-0 right-0">
      </div>
    </div>
    <div class="flex gap-16 justify-center mt-20">
      <div class="bg-[#f5f5f5] rounded-xl col-span-3 flex overflow-hidden w-full" @mouseover="data.hover = true" @mouseout="data.hover = false">
        <div class="p-8">
          <p class="mt-5 flex gap-2 items-center">
            <span class="text-gray-500 text-sm">
              07
            </span>
            <span class="font-bold text-2xl">
              СТО - ремонтны работы <br>
            </span>
          </p>
          <div class="mt-2">
            <p class=" text-xl mt-5 flex gap-3 items-center transition-all" :class="{'text-primary': data.hover}">
              Подробнее <ArrowLongRightIcon class="h-8 transition-all" :class="{'translate-x-7': data.hover}" />
            </p>
          </div>
        </div>

        <img src="/assets/img/sto.jpg" alt="sto" width="350" class="ml-auto">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'

const data = reactive({
  hover: false,
  hover2: false
})
</script>

<style scoped>

</style>
