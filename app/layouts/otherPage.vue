<template>
  <div>
    <HeaderOutherPages />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Footer from '~/app/components/UI/Footer.vue'
import HeaderOutherPages from '~/app/components/UI/HeaderOutherPages.vue'
import 'primeicons/primeicons.css'
</script>

<style></style>
