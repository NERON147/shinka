<template>
  <main class="container">
    <h1 class="font-bold text-4xl pt-40 text-center">
      Ремонт дисков
    </h1>
    <img loading="lazy" src="/assets/img/remont-diskov.jpg" alt="" class="rounded-3xl max-sm:h-auto h-[400px] w-auto m-auto my-10">
    <article class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Что такое ремонт дисков колес и зачем он нужен?</h2>
      <p class="mb-4">
        Ремонт дисков колес – это процесс восстановления их первоначального состояния после повреждений. Диски могут получить повреждения из-за ударов, попадания в ямы, контакта с бордюрами и других факторов. Восстановление дисков помогает вернуть их первоначальные характеристики и продлить срок службы.
      </p>
      <h3 class="text-xl font-semibold mb-2">Почему важен ремонт дисков колес?</h3>
      <p class="mb-4">
        Поврежденные диски могут привести к ряду проблем, таких как:
      </p>
      <ul class="list-disc list-inside mb-4">
        <li>Ухудшение управляемости автомобиля</li>
        <li>Увеличение износа шин</li>
        <li>Потеря герметичности и утечка воздуха</li>
        <li>Возникновение вибраций и шума при движении</li>
      </ul>
      <h3 class="text-xl font-semibold mb-2">Как проводится ремонт дисков колес?</h3>
      <p class="mb-4">
        Процесс ремонта дисков колес включает в себя следующие этапы:
      </p>
      <ol class="list-decimal list-inside mb-4">
        <li>Осмотр и диагностика повреждений диска</li>
        <li>Исправление геометрии диска с использованием специализированного оборудования</li>
        <li>Сварка и шлифовка трещин и сколов</li>
        <li>Покраска и нанесение защитного покрытия</li>
        <li>Проверка отремонтированного диска на балансировочном станке</li>
      </ol>
      <h3 class="text-xl font-semibold mb-2">Когда нужно проводить ремонт дисков колес?</h3>
      <p class="mb-4">
        Ремонт дисков рекомендуется при обнаружении следующих признаков:
      </p>
      <ul class="list-disc list-inside mb-4">
        <li>Видимые повреждения, такие как трещины, сколы и вмятины</li>
        <li>Вибрация рулевого колеса при движении</li>
        <li>Потеря давления в шинах</li>
        <li>Неравномерный износ шин</li>
      </ul>
      <h3 class="text-xl font-semibold mb-2">Прайс-лист на услуги по ремонту дисков колес</h3>
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
              <td class="border px-4 py-2">Исправление геометрии одного стального диска</td>
              <td class="border px-4 py-2">от 500 руб.</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2">Исправление геометрии одного литого диска 13-17″</td>
              <td class="border px-4 py-2">от 1000 руб.</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2">Исправление геометрии одного литого диска 18-22″</td>
              <td class="border px-4 py-2">от 1500 руб.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="mb-4">
        Воспользуйтесь нашими услугами по ремонту дисков колес, чтобы вернуть вашему автомобилю первоначальный внешний вид и обеспечить его безопасную эксплуатацию. Мы гарантируем высокое качество выполнения работ и индивидуальный подход к каждому клиенту.
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
  description: 'Отремонтируйте свои диски в Wheel Center GTN по приятной цене...',
  ogDescription: 'Отремонтируйте свои диски в Wheel Center GTN по приятной цене...',
  ogType: 'website',
  ogImage: '/assets/img/stoSEO.jpg',
  ogUrl: `${process.client ? window.location.origin : ''}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Шиномонтаж, СТО  Автосервисные легковых автомобилей в Гатчине',
  twitterDescription: 'Отремонтируйте свои диски в Wheel Center GTN по приятной цене...',
  twitterImage: '/assets/img/stoSEO.jpg'
})
</script>

<style scoped>

</style>
