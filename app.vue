<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      :color="'#b12d5d'"
      :height="3"
      :duration="1000"
      :throttle="0"
    />
    <Header />
    <NuxtPage />
    <Footer />
  </NuxtLayout>
</template>

<script setup>
import Header from '~/app/components/UI/Header.vue'
import Footer from '~/app/components/UI/Footer.vue'
import 'primeicons/primeicons.css'
</script>

<style></style>
