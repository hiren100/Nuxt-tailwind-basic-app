<template>
<div class="container lg:container mx-auto text-center">
  <h1 class="text-2xl font-bold orange_album--text text-center">this is main about us</h1>
  <!-- <img src="avatar-anisha.png" alt=""/> -->
  <img src="/img/avatar-anisha.png" alt="Discover Nuxt 3" />
  <button class="btn-white">Submit</button>
  <hr/>
  <button class="btn-info">Submit</button>
  
  <PostItem v-for="n in 10" :key="n" />
</div>
</template>

<style src="~/assets/css/helper.scss" scoped lang="scss">

</style>

<script setup>


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