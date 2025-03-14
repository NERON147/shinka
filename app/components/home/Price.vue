<template>
  <section id="prices" class="container">
    <h2 class="max-sxxs:text-2xl max-sm:text-3xl max-md:text-4xl text-5xl text-center font-extrabold mt-[100px]">
      ЦЕНЫ НА УСЛУГИ
    </h2>
    <h2 class="font-semibold mb-3">ПРАЙС-ЛИСТ НА УСЛУГИ ШИНОМОНТАЖА (С 01.02.2025)</h2>

    <div class="overflow-x-auto">
      <table class="min-w-full border border-gray-300 text-left text-sm">
        <thead class="bg-gray-200 text-xs sm:text-sm uppercase">
          <tr>
            <th>Наименование услуги/диаметр колеса</th>
            <th>Комплексная замена</th>
            <th>Замена + балансировка, шт.</th>
            <th>Монтаж + балансировка, шт.</th>
            <th>Балансировка, шт.</th>
            <th>Чистка колеса, шт.</th>
            <th>Снятие/установка колеса, шт.</th>
            <th>Монтаж/демонтаж шины, шт.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Легковые а/м 12-14"</td>
            <td>1800</td>
            <td>350</td>
            <td>250</td>
            <td>150</td>
            <td>50</td>
            <td>100</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Легковые а/м 15-16"</td>
            <td>2000</td>
            <td>400</td>
            <td>300</td>
            <td>200</td>
            <td>50</td>
            <td>150</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Легковые а/м 17-18", кроссоверы 15-17"</td>
            <td>2500</td>
            <td>450</td>
            <td>350</td>
            <td>250</td>
            <td>50</td>
            <td>180</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Микроавтобус 13-17" (4 колеса)</td>
            <td>2900</td>
            <td>450</td>
            <td>400</td>
            <td>250</td>
            <td>50</td>
            <td>200</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Микроавтобус 18-19", Внедорожник 15-19"</td>
            <td>3200</td>
            <td>600</td>
            <td>450</td>
            <td>300</td>
            <td>50</td>
            <td>200</td>
            <td>250</td>
          </tr>
          <tr>
            <td>Легковые а/м 19", Кроссовер 18-19"</td>
            <td>2900</td>
            <td>500</td>
            <td>400</td>
            <td>300</td>
            <td>50</td>
            <td>200</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Шины 20"</td>
            <td>3700</td>
            <td>750</td>
            <td>540</td>
            <td>350</td>
            <td>50</td>
            <td>250</td>
            <td>400</td>
          </tr>
          <tr>
            <td>Шины 21-22", Пикапы, "Газель" 6 колес, шины Offroad</td>
            <td>4500</td>
            <td>850</td>
            <td>600</td>
            <td>450</td>
            <td>50</td>
            <td>400</td>
            <td>400</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="mt-3"><strong>Дополнительно:</strong></p>
    <p>Шины Runflat +25% к стоимости услуг. Установка зап. колеса, расположенного под а/м – 300. Подкачка колеса – 25</p>
    <p>Ремонт шин: жгут 400*, грибок 900*, заплатка 1000*. Замена вентиля в шине 50*. Замена датчика давления 200*.</p>
    <p>Очистка обода диска от коррозии – 150* Установка камеры в колесо - 100* Услуги, не предусмотренные прейскурантом – 2000р/ч</p>

    <div class="flex justify-center mt-10">
      <Button
        label="Оставить заявку"
        class="bg-[#b87a3c] border-[#b87a3c] h-12 hover:bg-[#946435] hover:border-[#946435]"
        plain
        @click="anhcorScroll('footer')"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { anhcorScroll } from '@/app/helpers/anhcorScroll'
</script>

     <style scoped>
     body {
         font-family: Arial, sans-serif;
         background-color: #f4f4f4;
         margin: 20px;
         text-align: center;
     }

     h2 {
         color: #333;
     }

     table {
         width: 90%;
         margin: 0 auto;
         border-collapse: collapse;
         background: #fff;
         border-radius: 10px;
         overflow: hidden;
         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
     }

     th, td {
         padding: 12px;
         border: 1px solid #ddd;
         text-align: center;
     }

     th {
         background: #989898;
         color: white;
         font-weight: bold;
     }

     tr:nth-child(even) {
         background: #f9f9f9;
     }

     tr:hover {
         background: #f1f1f1;
     }

     td:first-child {
         font-weight: bold;
         text-align: left;
         background: #f8f9fa;
     }

     @media (max-width: 768px) {
         table {
             width: 100%;
         }
         th, td {
             padding: 8px;
         }
     }
 </style>
