<template>
  <main>
    <Price class="!mb-10 !mt-40" />
  </main>
</template>

<script setup lang="ts">
import Price from '~/app/components/home/Price.vue'
definePageMeta({
  layout: 'other-page'
})

useSeoMeta({
  title: 'Шиомонтаж, СТО  Рем. работы легковых автомобилей в Гатчине',
  ogTitle: 'Шиомонтаж, СТО  Рем. работы легковых автомобилей в Гатчине',
  description: 'Шиномонтаж техническое обслуживание и ремонт авто в Гатчине по приятным ценам',
  ogDescription: 'Шиномонтаж техническое обслуживание и ремонт авто в Гатчине по приятным ценам',
  ogType: 'website',
  ogImage: '/assets/img/stoSEO.jpg',
  ogUrl: `${process.client ? window.location.origin : ''}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Шиомонтаж, СТО  Рем. работы легковых автомобилей в Гатчине',
  twitterDescription: 'Шиномонтаж техническое обслуживание и ремонт авто в Гатчине по приятным ценам',
  twitterImage: '/assets/img/stoSEO.jpg'
})
</script>

<style scoped>

</style>
