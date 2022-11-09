<template>
  <div class="text-center mt-20">
    <h1 id="" class="text-3xl font-normal text-green-500  cyan--text title mb-5">
      How to install Tailwind CSS 3 in Nuxt 3
    </h1>   
   
    <p class="font-bellindia text-4xl mb-5">This is lorem ipsum text</p>
    <button class="btn-primary mr-5">Submit</button>
    <button class="btn-info text-white py-2 px-4 rounded-md transition ease-in-out bg-blue-500 hover:bg-indigo-500 duration-300">Submit</button>
    <hr class="mt-4"/>
    <NuxtLink to="/posts/1" class="text-blue-600">Post 1</NuxtLink> <br/>
    <NuxtLink to="/posts/2">Post 2</NuxtLink>  
    <hr/>
    <ul class="mt-10">
      <li v-for="user in users" :key="user.id">{{user.name}}</li>
    </ul>
    <ul class="mt-10 servier-side">
      <li class="font-proxima_bold" v-for="user in users2" :key="user.id">{{user.name}}</li>
    </ul>   


 
  </div>
</template>

<script setup>
const appConfig = useAppConfig()



const users = ref([])

onMounted(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => users.value = data)
})

const { data: users2 } = await useAsyncData('users2', () => $fetch('https://jsonplaceholder.typicode.com/users'));


useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { children: ' ' } ]
})


</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>