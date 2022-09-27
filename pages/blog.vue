<template>
<div>

  <div class="container mx-auto mt-20">
    <carousel :items-to-show="1.5">
      <slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>

    <div class="flex align-items justify-center min-h-screen flex-col p-10 gap-5" id="parent">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onclick="toggleDarkMode()">Toggle Dark Mode</button>
        <div class="text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-900 shadow-xl rounded-lg">
            <p class="ml-4 p-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </p>
        </div>
    </div>

  </div>
</div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});

</script>

<style scoped>

.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>