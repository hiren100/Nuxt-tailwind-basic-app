<template>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children="" />
    </Head>
  <div class="text-center py-10"><NuxtLink to="/" class="text-blue-600 hover:text-yellow-500"> &#60;&#60; Dynamic Post 1</NuxtLink> </div>
</template>

<script setup>
const title = ref('Dynamic post page')
  const route = useRoute()
  // When accessing /posts/1, route.params.id will be 1
  console.log(route.params.id)
</script>