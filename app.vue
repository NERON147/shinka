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
    </NuxtLayout>
</template>

<script setup>
import Header from '~/app/components/UI/Header.vue';
</script>

<style></style>