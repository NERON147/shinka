<template>
  <section class="bg-gradient-to-r from-black to-slate-900 relative">
    <div class="container text-white flex h-[694px]">
      <div class="w-1/2">
        <h2 class="text-5xl font-extrabold pt-20 tracking-wide leading-[70px]">
          БАННЕР С ВЫГОДНЫМ <br>
          <span class="text-primary">
            ПРЕДЛОЖЕНИЕМ
          </span>
        </h2>
        <p class="text-2xl mt-10">
          Оставьте заявку или позвоните прямо сейчас
        </p>
        <div class="mt-10 flex flex-col gap-5">
          <FloatLabel>
            <InputText id="username" v-model="data.name" class="w-[500px] h-[50px]" />
            <label for="username">ФИО</label>
          </FloatLabel>
          <FloatLabel>
            <InputMask id="phone" v-model="data.phone" class="w-[500px] h-[50px]" mask="+7 (999) 999 99 99" placeholder="99-999999" />
            <label for="phone">Телефон</label>
          </FloatLabel>
          <Button
            label="Оставить заявку"
            class="bg-[#b87a3c] border-[#b87a3c] h-12 hover:bg-[#946435] hover:border-[#946435] w-[500px]"
            plain
          />
          <div class="flex align-items-center mt-10">
            <Checkbox v-model="data.apply" input-id="ingredient1" name="pizza" value="Cheese" />
            <label for="ingredient1" class="ml-2"> Нажимая на кнопку "Оставить заявку", Вы подтверждаете, что ознакомлены с Политикой обработки и обеспечения безопасности персональных данных и даете свое согласие на обработку Персональных данных.
            </label>
          </div>
        </div>
      </div>
      <div>
        <img src="/assets/img/shina.png" alt="" class="absolute right-0 top-0">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const data = reactive({
  name: '',
  phone: '',
  apply: false
})
</script>

<style scoped>

</style>
