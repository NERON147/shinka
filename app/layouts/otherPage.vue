<template>
  <div>
    <HeaderOutherPages />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import HeaderOutherPages from '~/app/components/UI/HeaderOutherPages.vue'
import 'primeicons/primeicons.css'
</script>

<style></style>
