<template>
  <div>
    <NuxtLoadingIndicator
      :color="'#b87a3c'"
      :height="3"
      :duration="1000"
      :throttle="0"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '~/app/components/UI/Footer.vue'

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: blur(1rem);
}
</style>
