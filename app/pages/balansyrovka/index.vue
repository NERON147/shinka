<template>
  <main class="container">
    <h1 class="font-bold text-4xl mt-40 text-center">
      Балансировка колес
    </h1>
    <img loading="lazy" src="/assets/img/balansyrovka.webp" alt="" class="rounded-3xl max-sm:h-auto h-[400px] w-auto m-auto my-10">
    <article class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Что такое балансировка колес и зачем она нужна?</h2>
      <p class="mb-4">
        Балансировка колес – это процесс уравновешивания массы колеса и шины таким образом, чтобы они вращались равномерно. Это важная процедура, которая помогает предотвратить вибрации и обеспечивать комфортное и безопасное вождение.
      </p>
      <h3 class="text-xl font-semibold mb-2">Почему важна балансировка колес?</h3>
      <p class="mb-4">
        Неправильная балансировка колес может привести к ряду проблем, таких как:
      </p>
      <ul class="list-disc list-inside mb-4">
        <li>Увеличенный износ шин</li>
        <li>Повышенное потребление топлива</li>
        <li>Ухудшение управляемости автомобиля</li>
        <li>Повышенная вибрация и шум</li>
      </ul>
      <h3 class="text-xl font-semibold mb-2">Как проводится балансировка колес?</h3>
      <p class="mb-4">
        Процесс балансировки колес включает в себя следующие этапы:
      </p>
      <ol class="list-decimal list-inside mb-4">
        <li>Демонтаж колеса с автомобиля</li>
        <li>Установка колеса на балансировочный станок</li>
        <li>Определение мест, где необходимы корректировки массы</li>
        <li>Добавление балансировочных грузов на колесо</li>
        <li>Проверка результатов и при необходимости повторная корректировка</li>
      </ol>
      <h3 class="text-xl font-semibold mb-2">Когда нужно проводить балансировку колес?</h3>
      <p class="mb-4">
        Балансировку колес рекомендуется проводить при каждой смене шин, а также при появлении следующих симптомов:
      </p>
      <ul class="list-disc list-inside mb-4">
        <li>Вибрация рулевого колеса при движении</li>
        <li>Неравномерный износ шин</li>
        <li>Шум и гул во время езды</li>
      </ul>
      <h3 class="text-xl font-semibold mb-2">Преимущества регулярной балансировки колес</h3>
      <p class="mb-4">
        Регулярная балансировка колес имеет множество преимуществ, среди которых:
      </p>
      <ul class="list-disc list-inside mb-4">
        <li>Увеличение срока службы шин</li>
        <li>Улучшение топливной эффективности</li>
        <li>Снижение нагрузки на подвеску и рулевое управление</li>
        <li>Повышение комфорта и безопасности вождения</li>
      </ul>
      <h3 class="text-xl font-semibold mb-2">Прайс-лист на услуги по балансировке колес</h3>
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
              <td class="border px-4 py-2">Балансировка одного колеса легковой автомобиль 13-17″ </td>
              <td class="border px-4 py-2">250 руб.</td>
            </tr>
            <tr class="bg-white">
              <td class="border px-4 py-2">Балансировка одного колеса кроссовер 15-18″ </td>
              <td class="border px-4 py-2">300 руб.</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2">Балансировка одного колеса 19-24″ </td>
              <td class="border px-4 py-2">400 руб.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="mb-4">
        Воспользуйтесь нашими услугами по балансировке колес, чтобы обеспечить комфортное и безопасное вождение. Мы гарантируем высокое качество выполнения работ и заботу о вашем автомобиле.
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
  title: 'Шиномонтаж, СТО  Автосервисные легковых автомобилей в Гатчине',
  ogTitle: 'Шиномонтаж, СТО  Автосервисные легковых автомобилей в Гатчине',
  description: 'Для чего же нужна балансировка и ее цены...',
  ogDescription: 'Для чего же нужна балансировка и ее цены...',
  ogType: 'website',
  ogImage: '/assets/img/stoSEO.jpg',
  ogUrl: `${process.client ? window.location.origin : ''}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Шиномонтаж, СТО  Автосервисные легковых автомобилей в Гатчине',
  twitterDescription: 'Для чего же нужна балансировка и ее цены...',
  twitterImage: '/assets/img/stoSEO.jpg'
})
</script>

<style scoped>

</style>
