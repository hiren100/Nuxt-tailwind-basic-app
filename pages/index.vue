<template>
  <div class="text-center mt-20">
    <h1 id="" class="text-3xl font-normal text-green-500  cyan--text title mb-5">
      How to install Tailwind CSS 3 in Nuxt 3
    </h1>
   
    <p class="font-bellindia text-4xl mb-5">This is lorem ipsum text</p>
    <button class="btn-primary">Submit</button>
    <button class="btn-info">Submit</button>
   
    <ul class="mt-10">
      <li v-for="user in users" :key="user.id">{{user.name}}</li>
    </ul>
    <ul class="mt-10 servier-side">
      <li class="font-proxima_bold" v-for="user in users2" :key="user.id">{{user.name}}</li>
    </ul>   


 
  </div>
</template>

<script setup>

definePageMeta({
 title: 'Home Page test'
});

useHead({
  title: "Home Page",
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

const { data: users2 } = await useAsyncData('users2', () => $fetch('https://jsonplaceholder.typicode.com/users'));



</script>

