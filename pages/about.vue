<template>
<div class="container lg:container mx-auto text-center">
  <h1 class="text-2xl font-bold orange_album--text text-center">this is main about us</h1>

  
   <v-lazy-image src="https://images.unsplash.com/photo-1664021029310-bc881e4ebb22" src-placeholder="https://picsum.photos/seed/picsum/200/300" />


  <button class="btn-white">Submit</button>
  <hr/>
  <button class="btn-info">Submit</button>
  
  <PostItem v-for="n in 10" :key="n" />
</div>
</template>

<style src="~/assets/css/helper.scss" scoped lang="scss">

</style>

<script setup>
  import VLazyImage from "v-lazy-image";

// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "custom",
 title: 'About Page'
});


useHead({
  title: 'About Us page',
  bodyAttrs: {
    class: 'about-page'
  },
})


</script>