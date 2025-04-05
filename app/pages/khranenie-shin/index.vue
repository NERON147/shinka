<template>
  <main class="container">
    <h1 class="font-bold text-4xl mt-40 text-center">
      Хранение шин
    </h1>
    <img loading="lazy" src="/assets/img/hranenie-shin.jpeg" alt="" class="rounded-3xl max-sm:h-auto h-[400px] w-auto m-auto my-10">
    <article class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Хранение шин: Важность и Рекомендации</h2>
      <p class="mb-4">
        Правильное хранение шин является ключевым фактором для продления их срока службы и обеспечения безопасности на дороге. Неправильное хранение может привести к повреждению резины и ухудшению эксплуатационных характеристик.
      </p>
      <h3 class="text-xl font-semibold mb-2">Почему важно правильно хранить шины?</h3>
      <p class="mb-4">
        Шины, хранящиеся в неподходящих условиях, могут подвергаться ряду негативных факторов, таких как:
      </p>
      <ul class="list-disc list-inside mb-4">
        <li>Воздействие ультрафиолетовых лучей</li>
        <li>Перепады температуры</li>
        <li>Высокая влажность</li>
        <li>Механические повреждения</li>
      </ul>
      <h3 class="text-xl font-semibold mb-2">Рекомендации по хранению шин</h3>
      <p class="mb-4">
        Чтобы ваши шины сохраняли свои свойства на протяжении всего срока службы, следуйте следующим рекомендациям:
      </p>
      <ol class="list-decimal list-inside mb-4">
        <li>Храните шины в прохладном, сухом и темном месте.</li>
        <li>Избегайте прямого контакта с солнечным светом и источниками тепла.</li>
        <li>Держите шины вдали от химических веществ и растворителей.</li>
        <li>Укладывайте шины горизонтально, если они без дисков, и вертикально, если они на дисках.</li>
      </ol>
      <h3 class="text-xl font-semibold mb-2">Прайс-лист на услуги по хранению шин</h3>
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
              <td class="border px-4 py-2">Хранение одного комплекта шин (4 шт.) без дисков</td>
              <td class="border px-4 py-2">2000 руб./сезон</td>
            </tr>
            <tr class="bg-white">
              <td class="border px-4 py-2">Хранение одного комплекта шин (4 шт.) на дисках</td>
              <td class="border px-4 py-2">2500 руб./сезон</td>
            </tr>
            <tr class="bg-gray-100">
              <td class="border px-4 py-2">Мойка шин перед хранением</td>
              <td class="border px-4 py-2">500 руб./комплект</td>
            </tr>
          </tbody>
        </table>
        <p class="mb-4">
          Воспользуйтесь нашими услугами по хранению шин, чтобы быть уверенными в их сохранности и безопасности. Мы предоставляем оптимальные условия хранения и заботимся о вашем комфорте.
        </p>
      </div>
    </article>
    <p class="text-4xl my-10 font-bold text-center">
      Удобно хранить шины дома? <br>
      Доверьте это профессионалам!
    </p>
    <div class="flex justify-center my-10">
      <Button
        label="Оставить"
        class="bg-[#b87a3c] border-[#b87a3c] h-12 hover:bg-[#946435] hover:border-[#946435]"
        plain
        @click="anhcorScroll('footer')"
      />
    </div>
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
  description: 'Оставьте свои шины на хранение в Wheel Center GTN по приятной цене...',
  ogDescription: 'Оставьте свои шины на хранение в Wheel Center GTN по приятной цене...',
  ogType: 'website',
  ogImage: '/assets/img/stoSEO.jpg',
  ogUrl: `${process.client ? window.location.origin : ''}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Шиномонтаж, СТО  Автосервисные легковых автомобилей в Гатчине',
  twitterDescription: 'Оставьте свои шины на хранение в Wheel Center GTN по приятной цене...',
  twitterImage: '/assets/img/stoSEO.jpg'
})
</script>

<style scoped>

</style>
