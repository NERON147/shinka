<template>
  <div class="p-5 bg-gray-100 rounded-xl h-[425px] flex flex-col">
    <div class="flex-grow">
      <p class="text-lg font-bold mb-8">
        {{ props.item.name }}
      </p>
      <p class="mb-5 text-lg">
        {{ props.item.descr }}
      </p>
    </div>
    <a :href="props.item.link" target="_blank" class="text-center text-blue-500 hover:text-blue-700 transition-all">
      Читать полностью и смотреть фото
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
</script>

<style scoped>

</style>
