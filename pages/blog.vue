<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A better way to send money
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto" id="parent">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="getTheme">Click!</button>
      </div>

      <div class="flex flex-wrap justify-center font-proxima_normal">  
        <article class="m-4 md:w-1/2 lg:w-1/3" v-for="post in posts" :key="post.id">
          <NuxtLink :to="`/post-${post.id}`">
            <h1 class="mb-2 capitalize text-2xl font-semibold text-blue-500 hover:text-yellow-500">{{ post.title }}</h1>
          </NuxtLink>
          <p class="text-gray-600">{{ post.body }}...</p>
        </article>
      </div>


    </div>
  </div>
</template>

<script setup>

const parent = ref(null)

function getTheme(){
  console.log('get theme')
}


  const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts')
</script>

