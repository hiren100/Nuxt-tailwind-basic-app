<template>
<div class="container lg:container mx-auto text-center">
  <h1 class="text-2xl font-bold orange_album--text text-center">this is main about us</h1>
  <!-- <img src="avatar-anisha.png" alt=""/> -->
  <img src="/img/avatar-anisha.png" alt="Discover Nuxt 3" />
  <button class="btn-normal">Submit</button>
  <PostItem v-for="n in 10" :key="n" />
</div>
</template>

<style src="~/assets/css/helper.scss" scoped>

</style>

<script setup>


// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "custom",
});

useHead({
  title: 'My About',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My abouts page' }
  ],
  bodyAttrs: {
    class: 'about-page'
  },
})


</script>