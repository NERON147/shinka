<template>
  <section class="container">
    <h2 class="text-5xl text-center font-extrabold mt-[100px]">
      ЦЕНЫ НА УСЛУГИ
    </h2>
    <div class="flex gap-[200px] mt-[100px]">
      <p class="text-nowrap font-extrabold text-2xl">
        Замена резины
      </p>
      <div class="grid grid-cols-12 w-full font-bold text-xl">
        <p class="col-span-2 text-center">
          R 14-15
        </p>
        <p class="col-span-2 text-center">
          R 16
        </p>
        <p class="col-span-2 text-center">
          R 17
        </p>
        <p class="col-span-2 text-center">
          R 18
        </p>
        <p class="col-span-2 text-center">
          R 19
        </p>
        <p class="col-span-2 text-center">
          R 20-21
        </p>
        <Divider class="col-span-12 border-[1px]" />
        <p class="col-span-2 text-center">
          123 ₽
        </p>
        <p class="col-span-2 text-center">
          123 ₽
        </p>
        <p class="col-span-2 text-center">
          123 ₽
        </p>
        <p class="col-span-2 text-center">
          123 ₽
        </p>
        <p class="col-span-2 text-center">
          123 ₽
        </p>
        <p class="col-span-2 text-center">
          123 ₽
        </p>
      </div>
    </div>
    <Divider class="border-[2px] my-[50px] border-primary2" />
    <div class="flex justify-between ">
      <p class="font-extrabold text-2xl">
        Замена резины на джипах и паркетниках
      </p>
      <p class="font-bold text-xl">
        123 ₽
      </p>
    </div>
    <Divider class="border-[2px] my-[50px] border-primary2" />
    <div class="flex justify-between ">
      <p class="font-extrabold text-2xl">
        Замена колес на дисках без балансировки
      </p>
      <p class="font-bold text-xl">
        123 ₽
      </p>
    </div>
    <Divider class="border-[2px] my-[50px] border-primary2" />
    <div class="flex justify-between ">
      <p class="font-extrabold text-2xl">
        Замена колес на дисках с балансировкой
      </p>
      <p class="font-bold text-xl">
        123 ₽
      </p>
    </div>
    <div class="flex justify-center mt-10">
      <Button
        label="Оставить заявку"
        class="bg-[#b87a3c] border-[#b87a3c] h-12 hover:bg-[#946435] hover:border-[#946435]"
        plain
      />
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
