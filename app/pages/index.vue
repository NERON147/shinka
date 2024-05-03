<template>
  <article>
    <section class="bg-img">
      <div class="container">
        <h1>
          <div class="text-white text-[70px] font-bold mt-32 leading-[90px]">
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
        <div class="mt-24 flex gap-10 !font-light">
          <Button
            label="Оставить заявку"
            class="bg-[#b87a3c] border-[#b87a3c] h-12 hover:bg-[#946435] hover:border-[#946435]"
            plain
          />
          <Button
            label="Написать в Whatsapp"
            class="text-white border-white h-12 hover:border-[#bbbbbb]"
            outlined
          />
        </div>
      </div>
    </section>
    <SpecialOffers />
    <WhyUsVue />
  </article>
</template>

<script setup lang="ts">
import SpecialOffers from '~/app/components/home/SpecialOffers.vue'
import WhyUsVue from '~/app/components/home/WhyUs.vue'
</script>

<style scoped></style>
