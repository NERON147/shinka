<template>
  <main class="container">
    <h1 class="font-bold text-4xl mt-40 text-center">
      Услуги СТО
    </h1>
    <img loading="lazy" src="/assets/img/stoDescr.jpg" alt="" class="rounded-3xl max-sm:h-auto h-[400px] w-auto m-auto my-10">
    <article class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Услуги СТО: Комплексное Обслуживание Вашего Автомобиля</h2>
      <p class="mb-4">
        На нашей станции технического обслуживания (СТО) вы можете воспользоваться широким спектром услуг по обслуживанию и ремонту вашего автомобиля. Мы предлагаем качественное и быстрое обслуживание, чтобы ваш автомобиль всегда был в отличном состоянии.
      </p>
      <h3 class="text-xl font-semibold mb-2">Почему важно регулярное обслуживание автомобиля?</h3>
      <p class="mb-4">
        Регулярное техническое обслуживание автомобиля позволяет предотвратить серьезные поломки, увеличить срок службы автомобиля и обеспечить безопасность на дороге. Наши специалисты помогут вам вовремя выявить и устранить любые неисправности.
      </p>
      <h3 class="text-xl font-semibold mb-2">Основные услуги СТО</h3>
      <p class="mb-4">
        Мы предлагаем широкий спектр услуг по техническому обслуживанию и ремонту автомобилей:
      </p>
      <ul class="list-disc list-inside mb-4">
        <li>Диагностика и ремонт двигателей</li>
        <li>Техническое обслуживание и замена масел</li>
        <li>Ремонт и замена тормозных систем</li>
        <li>Ремонт подвески и рулевого управления</li>
        <li>Электротехнические работы</li>
        <li>Кузовной ремонт и покраска</li>
        <li>Шиномонтаж и балансировка колес</li>
      </ul>
      <h3 class="text-xl font-semibold mb-2">Прайс-лист на услуги СТО</h3>
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
              <td class="border px-4 py-2">Диагностика двигателя</td>
              <td class="border px-4 py-2">1500 руб.</td>
            </tr>
            <tr class="bg-white">
              <td class="border px-4 py-2">Замена масла и масляного фильтра без с/у защиты двигателя</td>
              <td class="border px-4 py-2">1000 руб.</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2">Ремонт тормозной системы</td>
              <td class="border px-4 py-2">от 2000 руб.</td>
            </tr>
            <tr class="bg-white">
              <td class="border px-4 py-2">Замена тормозных колодок (комплект)</td>
              <td class="border px-4 py-2">от 1200 руб.</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2">Ремонт подвески</td>
              <td class="border px-4 py-2">от 3000 руб.</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2">Электротехнические работы</td>
              <td class="border px-4 py-2">от 1000 руб.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="mb-4">
        Воспользуйтесь нашими услугами СТО, чтобы обеспечить надежную и безопасную эксплуатацию вашего автомобиля. Мы гарантируем высокое качество выполнения работ и индивидуальный подход к каждому клиенту.
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
  description: 'Доверьте ремонт своего авто в Wheel Center GTN по приятной цене...',
  ogDescription: 'Доверьте ремонт своего авто в Wheel Center GTN по приятной цене...',
  ogType: 'website',
  ogImage: '/assets/img/stoSEO.jpg',
  ogUrl: `${process.client ? window.location.origin : ''}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Шиномонтаж, СТО  Рем. работы легковых автомобилей в Гатчине',
  twitterDescription: 'Доверьте ремонт своего авто в Wheel Center GTN по приятной цене...',
  twitterImage: '/assets/img/stoSEO.jpg'
})
</script>

<style scoped>

</style>
