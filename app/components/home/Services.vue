<template>
  <section id="services" class="container !max-w-[1125px]">
    <h2 class="max-sxxs:text-2xl max-sm:text-3xl max-md:text-4xl text-5xl text-center font-extrabold mt-[100px]">
      НАШИ УСЛУГИ
    </h2>
    <div class="flex gap-16 max-xs:gap-10 justify-center mt-20 max-ss:flex-wrap">
      <nuxt-link to="shinomotaj">
        <div class="bg-[#262626] p-8 rounded-xl col-span-3 w-fit max-ss:w-full cursor-pointer" @mouseover="hover[0] = true" @mouseout="hover[0] = false">
          <p class="mt-5 flex gap-2 items-center">
            <span class="text-gray-500 text-sm">
              01
            </span>
            <span class="font-bold text-2xl text-white">
              Шиномонтаж R12-R24 <br>
            </span>
          </p>
          <div class="mt-2">
            <p class="text-white text-xl mt-5 flex gap-3 items-center text-shadow transition-all" :class="{'!text-primary': hover[0]}">
              Подробнее <ArrowLongRightIcon class="h-8 transition-all" :class="{'translate-x-7': hover[0]}" />
            </p>
          </div>
          <img src="/assets/img/kolesa.png" alt="kolesa" width="300" class="mt-20">
        </div>
      </nuxt-link>

      <div class="flex flex-col gap-10 mt-3 max-ss:mt-0">
        <nuxt-link to="prodaja-reziny">
          <div class="bg-[#f5f5f5] p-8 rounded-xl col-span-3 w-fit flex max-w-[700px] max-ss:flex-wrap cursor-pointer" @mouseover="hover[1] = true" @mouseout="hover[1] = false">
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
                <p class=" text-xl mt-5 flex gap-3 items-center transition-all" :class="{'text-primary': hover[1]}">
                  Подробнее <ArrowLongRightIcon class="h-8 transition-all" :class="{'translate-x-7': hover[1]}" />
                </p>
              </div>
            </div>

            <img src="/assets/img/kolesa-bez-diska.png" alt="kolesa-bez-diska" width="210" class="max-sm:ml-[15px] ml-[135px] max-ss:mt-10">
          </div>
        </nuxt-link>
        <nuxt-link to="balansyrovka">
          <div class="bg-primary2 rounded-xl col-span-3 max-xs:w-full w-fit flex max-w-[700px] overflow-hidden max-ss:flex-wrap cursor-pointer" @mouseover="hover[2] = true" @mouseout="hover[2] = false">
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
                <p class=" text-xl mt-5 flex gap-3 items-center transition-all" :class="{'text-primary': hover[2]}">
                  Подробнее <ArrowLongRightIcon class="h-8 transition-all" :class="{'translate-x-7': hover[2]}" />
                </p>
              </div>
            </div>

            <img src="/assets/img/klych.png" alt="klych" width="360" class="max-xs:hidden -mr-[10px]">
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="flex gap-16 max-xs:gap-10 justify-center max-ss:mt-10 mt-20 max-ss:flex-wrap">
      <div class="flex flex-col gap-10">
        <nuxt-link to="khranenie-shin">
          <div class="bg-[#f5f5f5] rounded-xl col-span-3 w-fit flex max-w-[700px] overflow-hidden cursor-pointer" @mouseover="hover[3] = true" @mouseout="hover[3] = false">
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
                <p class=" text-xl mt-5 flex gap-3 items-center transition-all" :class="{'text-primary': hover[3]}">
                  Подробнее <ArrowLongRightIcon class="h-8 transition-all" :class="{'translate-x-7': hover[3]}" />
                </p>
              </div>
            </div>

            <img src="/assets/img/hranenenie.png" alt="hranenenie" width="350">
          </div>
        </nuxt-link>
        <nuxt-link to="perebortovka-koles">
          <div class="bg-[#d4d4d4] rounded-xl col-span-3 max-xs:w-full w-fit flex max-w-[700px] overflow-hidden cursor-pointer" @mouseover="hover[4] = true" @mouseout="hover[4] = false">
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
                <p class=" text-xl mt-5 flex gap-3 items-center transition-all" :class="{'text-primary': hover[4]}">
                  Подробнее <ArrowLongRightIcon class="h-8 transition-all" :class="{'translate-x-7': hover[4]}" />
                </p>
              </div>
            </div>

            <img src="/assets/img/perebortovka.png" alt="perebortovka" width="370" class="max-xs:hidden max-sm:ml-[15px] ml-[100px]">
          </div>
        </nuxt-link>
      </div>
      <nuxt-link to="remont-diskov">
        <div class="bg-[#262626] rounded-xl col-span-3 w-fit h-[440px] max-ss:h-[380px] max-ss:w-full relative cursor-pointer" @mouseover="hover[5] = true" @mouseout="hover[5] = false">
          <div class="px-[75px] py-[20px] max-ss:pl-[20px] max-ss:pr-[175px] w-full">
            <p class="mt-5 flex gap-2 items-center">
              <span class="text-gray-500 text-sm">
                06
              </span>
              <span class="font-bold text-2xl text-white">
                Ремонт дисков <br>
              </span>
            </p>
            <div class="mt-2">
              <p class="text-white text-xl mt-5 flex gap-3 items-center text-shadow transition-all" :class="{'!text-primary': hover[5]}">
                Подробнее <ArrowLongRightIcon class="h-8 transition-all" :class="{'translate-x-7': hover[5]}" />
              </p>
            </div>
          </div>

          <img src="/assets/img/disk.png" alt="disk" width="270" class="absolute bottom-0 right-0">
        </div>
      </nuxt-link>
    </div>
    <nuxt-link to="sto">
      <div class="flex gap-16 justify-center max-ss:mt-10 mt-20">
        <div class="bg-[#f5f5f5] rounded-xl col-span-3 flex overflow-hidden w-full cursor-pointer" @mouseover="hover[6] = true" @mouseout="hover[6] = false">
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
              <p class=" text-xl mt-5 flex gap-3 items-center transition-all" :class="{'text-primary': hover[6]}">
                Подробнее <ArrowLongRightIcon class="h-8 transition-all" :class="{'translate-x-7': hover[6]}" />
              </p>
            </div>
          </div>

          <img src="/assets/img/sto.jpg" alt="sto" width="350" class="max-xs:hidden ml-auto">
        </div>
      </div>
    </nuxt-link>
  </section>
</template>

<script setup lang="ts">
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'

const hover = reactive(new Array(7).fill(false))
</script>

<style scoped>

</style>
