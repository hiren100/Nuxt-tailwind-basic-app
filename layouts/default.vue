<template>
  <div>
    <Title>Nuxt 3 app Example</Title>
    <TheHeader />
    <slot />
  </div>
</template>
<script>
  export default {
    loading: false
  }
  const route = useRoute()
useHead({
   titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Nuxt Tailwind App` : 'Nuxt Tailwind App';
    },
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: `App Name - ${route.meta.title}` }
  ],
})  
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

</style>

