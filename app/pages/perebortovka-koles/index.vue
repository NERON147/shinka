<template>
  <main class="container">
    <h1 class="font-bold text-4xl mt-40 text-center">
      Перебортовка колес
    </h1>
    <img src="/assets/img/perebortovka.jpg" alt="" class="rounded-3xl max-sm:h-auto h-[400px] w-auto m-auto my-10">
    <article class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Что такое перебортовка колес и зачем она нужна?</h2>
      <p class="mb-4">
        Перебортовка колес – это процесс замены шин на дисках. Эта процедура необходима при сезонной смене шин, а также при покупке новых шин или дисков. Перебортовка колес помогает обеспечить правильную установку шин и их долговечность.
      </p>
      <h3 class="text-xl font-semibold mb-2">Почему важна перебортовка колес?</h3>
      <p class="mb-4">
        Неправильная перебортовка колес может привести к ряду проблем, таких как:
      </p>
      <ul class="list-disc list-inside mb-4">
        <li>Повреждение шин и дисков</li>
        <li>Утечка воздуха из шин</li>
        <li>Неравномерный износ шин</li>
        <li>Нарушение баланса колес</li>
      </ul>
      <h3 class="text-xl font-semibold mb-2">Как проводится перебортовка колес?</h3>
      <p class="mb-4">
        Процесс перебортовки колес включает в себя следующие этапы:
      </p>
      <ol class="list-decimal list-inside mb-4">
        <li>Демонтаж колеса с автомобиля</li>
        <li>Снятие старой шины с диска с использованием специального оборудования</li>
        <li>Установка новой шины на диск</li>
        <li>Балансировка колеса</li>
        <li>Установка колеса обратно на автомобиль</li>
      </ol>
      <h3 class="text-xl font-semibold mb-2">Когда нужно проводить перебортовку колес?</h3>
      <p class="mb-4">
        Перебортовка колес рекомендуется при:
      </p>
      <ul class="list-disc list-inside mb-4">
        <li>Сезонной смене шин (лето/зима)</li>
        <li>Покупке новых шин или дисков</li>
        <li>Повреждении шин или дисков</li>
      </ul>
      <h3 class="text-xl font-semibold mb-2">Прайс-лист на услуги по перебортовке колес</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full mb-4">
          <thead>
            <tr class="bg-gray-200">
              <th class="px-4 py-2">Услуга</th>
              <th class="px-4 py-2">Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2">Перебортовка одного колеса</td>
              <td class="border px-4 py-2">600 руб.</td>
            </tr>
            <tr class="bg-white">
              <td class="border px-4 py-2">Перебортовка комплекта (4 колеса)</td>
              <td class="border px-4 py-2">2200 руб.</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2">Перебортовка колес для внедорожников (4 колеса)</td>
              <td class="border px-4 py-2">2800 руб.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="mb-4">
        Воспользуйтесь нашими услугами по перебортовке колес, чтобы обеспечить правильную установку шин и их долговечность. Мы гарантируем высокое качество выполнения работ и заботу о вашем автомобиле.
      </p>
      <div class="flex justify-center my-10">
        <Button
          label="Записаться"
          class="bg-[#b87a3c] border-[#b87a3c] h-12 hover:bg-[#946435] hover:border-[#946435]"
          plain
          @click="anhcorScroll('footer')"
        />
      </div>
    </article>
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
  description: 'Осуществите перебортовку шин в Wheel Center GTN по приятной цене...',
  ogDescription: 'Осуществите перебортовку шин в Wheel Center GTN по приятной цене...',
  ogType: 'website',
  ogImage: '/assets/img/stoSEO.jpg',
  ogUrl: `${process.client ? window.location.origin : ''}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Шиномонтаж, СТО  Рем. работы легковых автомобилей в Гатчине',
  twitterDescription: 'Осуществите перебортовку шин в Wheel Center GTN по приятной цене...',
  twitterImage: '/assets/img/stoSEO.jpg'
})
</script>

<style scoped>

</style>
