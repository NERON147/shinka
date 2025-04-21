<template>
  <section id="find" class="mt-20 bg-gray-200 pb-20">
    <div class="container">
      <h2 class="max-sxxs:text-2xl max-sm:text-3xl max-md:text-4xl text-5xl font-extrabold pt-20 max-sm:text-center">
        КАК НАС НАЙТИ
      </h2>
      <div class="flex justify-between max-sm:flex-wrap max-sm:justify-center max-sm:gap-10">
        <div class="mt-10 flex gap-10 items-center">
          <i class="pi pi-compass text-primary text-4xl" />
          <a
            class="max-md:text-xl text-2xl font-bold"
            href="https://yandex.ru/maps/org/shinny_tsentr/11583592634/?ll=30.162460%2C59.551708&z=17"
            target="_blank"
            @click="openYandexNavigator"
          >
            Нажмите чтобы построить маршрут до: <br> <span class="font-normal">станция Фрезерная, 1, посёлок Торфяное, <br> Гатчинский муниципальный округ, Ленинградская область</span>
          </a>
        </div>
        <div style="position:relative;overflow:hidden;" class="rounded-lg w-[560px] h-[400px]">
          <a href="https://yandex.ru/maps/org/shinny_tsentr/11583592634/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Шинный центр</a><a href="https://yandex.ru/maps/10174/saint-petersburg-and-leningrad-oblast/category/tire_service/184105260/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Шиномонтаж в Санкт‑Петербурге и Ленинградской области</a><iframe
            src="https://yandex.ru/map-widget/v1/org/shinny_tsentr/11583592634/?ll=30.158079%2C59.551491&z=16"
            width="560"
            height="400"
            frameborder="1"
            allowfullscreen="true"
            style="position:relative;"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function openYandexNavigator (event: any) {
  if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
    event.preventDefault()
    window.location.href = 'yandexnavi://build_route_on_map?lat_to=59.551440&lon_to=30.158040'
  }
}
</script>

<style scoped>

</style>
