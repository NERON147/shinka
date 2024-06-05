<template>
  <section id="reviews" class="bg-gray-200 pb-20">
    <div class="container">
      <h2 class="max-sxxs:text-2xl max-sm:text-3xl max-md:text-4xl text-5xl text-center font-extrabold mt-[100px] pt-20 mb-20">
        РЕАЛЬНЫЕ ОТЗЫВЫ
      </h2>
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
        :slides-per-view="4"
        :grab-cursor="true"
        :navigation="{
          prevEl: '.prev',
          nextEl: '.next',
        }"
        :breakpoints="data.breakpoints"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
      >
        <SwiperSlide v-for="(slide, index) in data.reviews" :key="index">
          <div
            :data-aos-duration="index * 200 + 500"
            :data-aos-delay="index * 200 + 150"
            data-aos="fade"
          >
            <ReviewsCard :item="slide" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="flex justify-center mt-10">
        <Button
          label="Оставить отзыв"
          class="bg-[#b87a3c] border-[#b87a3c] h-12 hover:bg-[#946435] hover:border-[#946435]"
          plain
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ReviewsCard from '~/app/components/home/UI/Reviews/ReviewsCard.vue'
const data = reactive({
  reviews: [
    {
      name: 'Михаил Силаев',
      descr: 'Ребята профессионалы из знаменитой сети шиномонтажа. Профессионалы. Быстро и качественно. Не навязывают работы. Всё по делу. Ценник гуманный. Оборудование хорошее. Один раз перебортировали меня бесплатно, хотя проблема даже не в колесах оказалась. Молодцы. Если реально хотите качественно переобуться, то можно сюда.',
      rate: 5,
      link: 'https://yandex.ru/maps/org/11583592634/reviews?reviews%5BpublicId%5D=jyve2eawy5bx9w9dbbq575xjaw&si=d31v3ykchwf6ghtemftgdrbphw&utm_source=review'
    },
    {
      name: 'Ершов Александр Николаевич',
      descr: 'Опишу со стороны человека, который первый раз приехал в Гатчину. Легко нашел, быстро договорился. На хранение разместил летнюю резину и автобокс, причем всё за умеренную плату. Так же можно договориться по другим вопросам по обслуживанию авто. Рекомендую',
      rate: 5,
      link: 'https://yandex.ru/maps/org/11583592634/reviews?reviews%5BpublicId%5D=kx7g6tc07b8e43kzwg5bg246fc&si=d31v3ykchwf6ghtemftgdrbphw&utm_source=review'
    },
    {
      name: 'Андрей Каратун',
      descr: 'Отличный шиномонтаж! Всё на Высшем уровне! Цена, приятно удивила + пакеты для шин в подарок! Рекомендую!',
      rate: 5,
      link: 'https://yandex.ru/maps/org/11583592634/reviews?reviews%5BpublicId%5D=b5d4vq0megb9ccf2ayz48fgcv0&si=d31v3ykchwf6ghtemftgdrbphw&utm_source=review'
    },
    {
      name: 'Валерия Незванова',
      descr: 'Отличный сервис. Внутри чисто, есть зона ожидания, работу выполняют быстро и качественно, низкая стоимость хранения резины.',
      rate: 5,
      link: 'https://yandex.ru/maps/org/11583592634/reviews?reviews%5BpublicId%5D=jd0nyzj2m9y39j6pjb7znhyqn4&si=d31v3ykchwf6ghtemftgdrbphw&utm_source=review'
    },
    {
      name: 'Igor Sug',
      descr: 'Отлично сделала ли, быстро и качественно',
      rate: 5,
      link: 'https://yandex.ru/maps/org/11583592634/reviews?reviews%5BpublicId%5D=aa9nby7z6qp0g4bzzb9mv3cr2g&si=d31v3ykchwf6ghtemftgdrbphw&utm_source=review'
    },
    {
      name: 'Коваленко Игорь',
      descr: 'Отличный шиномонтаж, хороший мастер. качество/цена',
      rate: 5,
      link: 'https://yandex.ru/maps/org/11583592634/reviews?reviews%5BpublicId%5D=b4dtjt711m4uuy9wcmzx20hrmc&si=d31v3ykchwf6ghtemftgdrbphw&utm_source=review'
    },
    {
      name: 'Татьяна Осипова',
      descr: 'Переобуваю свою ладочку уже 3 сезон. И шины храню там же. Рекомендую.',
      rate: 5,
      link: 'https://yandex.ru/maps/org/11583592634/reviews?reviews%5BpublicId%5D=55h7wap5k5q0rzettz48a757am&si=d31v3ykchwf6ghtemftgdrbphw&utm_source=review'
    },
    {
      name: 'Служба п.',
      descr: 'Отличный сервис, переобули машину быстро и качественно. Оставили шины на хранение. Чистое, уютное помещение. Можно оплатить картой',
      rate: 5,
      link: 'https://yandex.ru/maps/org/11583592634/reviews?reviews%5BpublicId%5D=me9c3xy2c1x8auwjr292vma6gm&si=d31v3ykchwf6ghtemftgdrbphw&utm_source=review'
    },
    {
      name: 'Игорь Ю.',
      descr: 'Переобулся с одновременной покупкой резины. Быстро, чисто, комфортно ждать!',
      rate: 5,
      link: 'https://yandex.ru/maps/org/11583592634/reviews?reviews%5BpublicId%5D=8j3y1jjd1h23mbv1pgyetwrvgg&si=d31v3ykchwf6ghtemftgdrbphw&utm_source=review'
    }
    // {
    //   name: '',
    //   descr: '',
    //   rate: 5,
    //   link: ''
    // },
  ],
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    550: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    644: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    950: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1085: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1380: {
      slidesPerView: 3,
      spaceBetween: -10
    },
    1381: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  }
})
</script>

<style scoped>

</style>
