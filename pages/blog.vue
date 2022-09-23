<template>
  <div class="container mx-auto mt-20">
    <carousel :items-to-show="1.5">
      <slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>
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