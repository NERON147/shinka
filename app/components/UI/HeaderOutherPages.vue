<template>
  <header class="fixed top-0 w-full z-50">
    <section class="container">
      <div class="p-5 flex justify-between items-center backdrop-blur-[4px] rounded-lg mt-5">
        <nuxt-link to="/">
          <img
            src="/assets/img/logo.png"
            alt="logo"
            class="max-lg:w-[300px] max-sxxs:w-[250px]"
          >
        </nuxt-link>

        <div class="max-lg:hidden px-5 py-2 bg-[#a8a8a841] rounded-lg fixed flex items-center justify-center right-0 left-0 w-fit m-auto transition-all z-10">
          <ul class="flex gap-2.5 text-primary text-[14px] font-extrabold ">
            <li
              v-for="item in data.nav"
              :key="item.name"
              class="cursor-pointer hover:text-primary transition-all hover:scale-110"
            >
              <nuxt-link :to="item.to">
                {{ item.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="flex flex-col max-ss:hidden">
          <span class="text-black font-light text-lg">
            пн-пт: 09:00 - 20:00
          </span>
          <a
            href="tel:+79999999999"
            class="text-black text-xl font-bold"
          >
            +7 (999) 999-99-99
          </a>
        </div>
        <div id="menuToggle" class="lg:hidden block mr-2">
          <input
            id="checkbox"
            type="checkbox"
            :checked="data.isDropdownOpen"
            @click="data.isDropdownOpen = !data.isDropdownOpen"
          >
          <label class="toggle" for="checkbox">
            <div class="bar bar--top" />
            <div class="bar bar--middle" />
            <div class="bar bar--bottom" />
          </label>
          <transition name="fade">
            <div v-if="data.isDropdownOpen" class="dropdown">
              <transition-group
                name="fade"
                tag="ul"
                class="options-container"
              >
                <li
                  v-for="(link, index) in data.nav"
                  :key="link.name"
                  class="font-extrabold text-xl text-primary2"
                  :style="{ animationDelay: `${index * 0.1}s` }"
                  @click="data.isDropdownOpen = !data.isDropdownOpen"
                >
                  <nuxt-link
                    :to="link.to"
                  >
                    {{ link.name }}
                  </nuxt-link>
                </li>

                <div class="flex flex-col max-ss:flex ss:hidden">
                  <span class="text-black font-light text-lg">
                    пн-пт: 09:00 - 20:00
                  </span>
                  <a
                    href="tel:+79999999999"
                    class="text-black font-bold text-xl"
                  >
                    +7 (999) 999-99-99
                  </a>
                </div>
              </transition-group>
            </div>
          </transition>
        </div>
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
const data = reactive({
  isDropdownOpen: false,
  nav: [
    {
      name: 'ШИНОМОНТАЖ',
      to: 'shinomotaj'
    },
    {
      name: 'ПРОДАЖА РЕЗИНЫ',
      to: 'prodaja-reziny'
    },
    {
      name: 'БАЛАНСИРОВКА',
      to: 'balansyrovka'
    },
    {
      name: 'ХРАНЕНИЕ',
      to: 'khranenie-shin'
    },
    {
      name: 'ПЕРЕБОРТОВКА',
      to: 'perebortovka-koles'
    },
    {
      name: 'РЕМОНТ ДИСКОВ',
      to: 'remont-diskov'
    },
    {
      name: 'СТО',
      to: 'sto'
    }
  ]
})
</script>

<style>
 .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
    }
    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }
    .options-container {
      z-index: 20;
      list-style: none;
      padding: 0;
      margin: 0;
      position: absolute;
      top: 80px;
      right: 20px;
      background-color: rgba(128, 128, 128, 0.918);
      width: 260px;
      padding: 16px;
      border-radius: 16px;
      font-weight: 500;
      font-size: 16px;
    }
    .options-container li {
      padding: 12px 8px;
      cursor: pointer;
      animation: fadeIn 0.5s ease-in-out;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    #checkbox {
      display: none;
    }

    .toggle {
      position: relative;
      width: 24px;
      cursor: pointer;
      margin: auto;
      display: block;
    }

    .bar {
      position: absolute;
      left: 0;
      right: 0;
      height: 4px;
      border-radius: calc(4px / 2);
      background: gray;
      color: inherit;
      opacity: 1;
      transition: none 0.35s cubic-bezier(0.5, -0.35, 0.35, 1.5) 0s;
    }

    /***** Tornado Animation *****/

    .bar--top {
      bottom: calc(50% + 5px + 4px / 2);
      transition-property: bottom, transform;
      transition-delay: calc(0s + 0.35s) * 0.6;
    }

    .bar--middle {
      top: calc(50% - 4px / 2);
      transition-property: opacity, transform;
      transition-delay: calc(0s + 0.35s * 0.3);
    }

    .bar--bottom {
      top: calc(50% + 5px + 4px / 2);
      transition-property: top, transform;
      transition-delay: 0s;
    }

    #checkbox:checked + .toggle .bar--top {
      transform: rotate(-135deg);
      transition-delay: 0s;
      bottom: calc(50% - 4px / 2);
    }

    #checkbox:checked + .toggle .bar--middle {
      opacity: 0;
      transform: rotate(-135deg);
      transition-delay: calc(0s + 0.35s * 0.3);
    }

    #checkbox:checked + .toggle .bar--bottom {
      top: calc(50% - 4px / 2);
      transform: rotate(-225deg);
      transition-delay: calc(0s + 0.35s * 0.6);
    }

</style>
