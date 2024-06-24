<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/app/components/UI/Header.vue'
import Footer from '~/app/components/UI/Footer.vue'
import 'primeicons/primeicons.css'
</script>

<style></style>
