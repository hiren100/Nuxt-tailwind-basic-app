<template>
  <div class="mx-auto max-w-7xl text-center">
    <h1 class="text-2xl font-bold orange_album--text text-center">this is main about us</h1>

    
    <!-- <v-lazy-image src="https://images.unsplash.com/photo-1664021029310-bc881e4ebb22" src-placeholder="https://picsum.photos/seed/picsum/200/300" /> -->


    <button class="btn-white">Submit</button>
    <hr/>
    <button class="btn-info">Submit</button>
    
    <PostItem v-for="n in 10" :key="n" />

    <div class="px-4">
      <div class="grid gap-10 lg:gap-10 md:grid-cols-2 my-10">
        <div class="relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105 aspect-video">
          <v-lazy-image src="https://images.unsplash.com/photo-1664021029310-bc881e4ebb22" src-placeholder="https://picsum.photos/seed/picsum/200/300" />
        </div>
        <div class="relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105 aspect-video">
          <v-lazy-image src="https://images.unsplash.com/photo-1664021029310-bc881e4ebb22" src-placeholder="https://picsum.photos/seed/picsum/200/300" />
        </div>
      </div>
    </div>

  </div>
</template>

<style src="~/assets/css/helper.scss" scoped lang="scss">
</style>

<script setup lang="ts">
  import VLazyImage from "v-lazy-image";

// This will work in both `<script setup>` and `<script>`


useHead({
  title: 'About Us page',
  bodyAttrs: {
    class: 'about-page'
  }
})


</script>