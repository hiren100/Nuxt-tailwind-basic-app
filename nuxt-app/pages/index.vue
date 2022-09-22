<template>
  <div class="text-center mt-20">
    <h1 class="text-3xl font-normal text-green-500 cyan--text title">
      How to install Tailwind CSS 3 in Nuxt 3
    </h1>
    <p class="font-proxima_light">This is lorem ipsum text</p>
    <button class="btn-primary">Submit</button>
    <button class="btn-white">Submit</button>
    <ul class="mt-10">
      <li v-for="user in users" :key="user.id">{{user.name}}</li>
    </ul>
    <ul class="mt-10 servier-side">
      <li v-for="user in users2" :key="user.id">{{user.name}}</li>
    </ul>    
  </div>
</template>

<script setup>
useHead({
  title: 'My App',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'home'
  }
})

const users = ref([])

onMounted(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => users.value = data)
})

const { data: users2 } = await useAsyncData('users2', () => $fetch('https://jsonplaceholder.typicode.com/users'))

</script>

