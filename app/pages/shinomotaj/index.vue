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
  title: 'ШИНОМОНТАЖ, СТО  РЕМ. РАБОТЫ ЛЕГКОВЫХ АВТОМОБИЛЕЙ В ГАТЧИНЕ',
  ogTitle: 'ШИНОМОНТАЖ, СТО  РЕМ. РАБОТЫ ЛЕГКОВЫХ АВТОМОБИЛЕЙ В ГАТЧИНЕ',
  description: 'Шиномонтаж техническое обслуживание и ремонт авто в Гатчине по приятным ценам',
  ogDescription: 'Шиномонтаж техническое обслуживание и ремонт авто в Гатчине по приятным ценам',
  ogType: 'website',
  ogImage: '/assets/img/stoSEO.jpg',
  ogUrl: `${process.client ? window.location.origin : ''}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'ШИНОМОНТАЖ, СТО  РЕМ. РАБОТЫ ЛЕГКОВЫХ АВТОМОБИЛЕЙ В ГАТЧИНЕ',
  twitterDescription: 'Шиномонтаж техническое обслуживание и ремонт авто в Гатчине по приятным ценам',
  twitterImage: '/assets/img/stoSEO.jpg'
})
</script>

<style scoped>

</style>
