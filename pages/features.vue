<template>
<div>

  <div class="container mx-auto mt-20 max-w-7xl px-5">
  <Carousel :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  <hr class="my-10"/>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide  :key="1">
      <div class="carousel__item">
        <div class="animate__animated animate__fadeInDown">static slide</div>
        </div>
    </Slide>
        <Slide  :key="2">
      <div class="carousel__item">
        <div class="animate__animated animate__fadeInDown animate__delay-2s">static slide</div>
      </div>
    </Slide>
        <Slide  :key="3">
      <div class="carousel__item">
        <div class="animate__animated animate__fadeInDown animate__delay-3s ">static slide</div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
<hr class="my-10"/>

  <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>
  </Carousel>

  <Carousel
    id="thumbnails"
    :items-to-show="4"
    :wrap-around="true"
    v-model="currentSlide"
    ref="carousel"
  >
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item" @click="slideTo(slide - 1)">{{ slide }}</div>
    </Slide>
  </Carousel>  
    

    <div class="flex align-items justify-center min-h-screen flex-col p-10 gap-5" id="parent">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="getTheme">Toggle Dark Mode</button>
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
import 'vue3-carousel/dist/carousel.css';
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default defineComponent({
  name: 'Breakpoints',
  name: 'Autoplay',
  name: 'Gallery',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

    data: () => ({
    // carousel settings
     currentSlide: 0,
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),

 methods: {
    getTheme() {
      const parent = document.getElementById("parent");
      parent.classList.toggle('dark')
    },
    slideTo(val) {
      this.currentSlide = val
    },    
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
.carousel__slide {
    padding: 1px;
}
</style>
