<template>
<div class="min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8 mx-auto">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Contact Us</h2>

    </div>
    <form class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true">
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-500 text-white py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <!-- Heroicon name: mini/lock-closed -->
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
          Contact Us
        </button>
      </div>
    </form>
  </div>

<div class="mouse_move">
      <img
        id="img1"
        src=
          "https://media.geeksforgeeks.org/wp-content/uploads/20210101144014/gfglogo.png"
        class="mouse"
        value="5"/>
    </div>






      <div class="tabs">
         <button id="london" class="tablinks active" data-country="London"><p data-title="London">London</p></button>
         <button id="paris" class="tablinks" data-country="Paris"><p data-title="Paris">Paris</p></button>
         <button id="barcelona" class="tablinks" data-country="Barcelona"><p data-title="Barcelona">Barcelona</p></button>
         <button id="madrid" class="tablinks" data-country="Madrid"><p data-title="Madrid">Madrid</p></button>
         <span class="dot"></span>
      </div>

      <div class="wrapper_tabcontent">
         <div id="London" class="tabcontent active">
            <h3>London</h3>
            <p>London is the capital of Great Britain. It is one of the greatest cities in the world. It is an important business and financial centre. It is an intellectual centre, too. Everywhere in London, there are open spaces: Hyde Park and Regent Park are the largest. The City is the oldest part of London. </p>
         </div>

         <div id="Paris" class="tabcontent">
            <h3>Paris</h3>
            <p>Paris is in the Paris department of the Paris-Isle-of-France region The French historic, political and economic capital, with a population of only 2.5 million is located in the northern part of France. One of the most beautiful cities in the world. Home to historical monuments such as Notre Dame, the Eiffel tower (320m), Bastille, Louvre and many more. </p>
         </div>

         <div id="Barcelona" class="tabcontent">
            <h3>Barcelona</h3>
            <p>Barcelona has been an urban laboratory since the high Medieval Ages. A place of diversity, a backdrop for a multiplicity of social and cultural processes on multiple scales that reflect different ways of constructing the future, a city with a long experience of urban life and social innovations. </p>
         </div>

         <div id="Madrid" class="tabcontent">
            <h3>Madrid</h3>
            <p>Madrid is in the middle of Spain, in the Community of Madrid. The Community is a large area that includes the city as well as small towns and villages outside the city. 7 million people live in the Community. More than 3 million live in the city itself. 
            </p>
         </div>
      </div>      


</div>  
</template>


<script setup>
  useHead({
    title: 'My Contact',
    // or, instead:
    // titleTemplate: (title) => `My App - ${title}`,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'My contanct page' }
    ],
    bodyAttrs: {
      class: 'contanct-page'
    }
  }) 





  onMounted(()=>{
     document.addEventListener("mousemove", parallax);
      function parallax(event) {
        this.querySelectorAll(".mouse").forEach((shift) => {
          const position = shift.getAttribute("value");
          const x = (window.innerWidth - event.pageX * position) / 90;
          const y = (window.innerHeight - event.pageY * position) / 90;
  
          shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      }   
      
     var tabLinks = document.querySelectorAll(".tablinks");
      var tabContent = document.querySelectorAll(".tabcontent");

      const tabActive = document.querySelectorAll(".indicator");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });
 

  document.querySelector("#" + country).classList.add("active");
   
   btnTarget.classList.add("active");

}
 

  })  
</script>

<style scoped>
  .mouse{
    max-width: 100px;
  }

.tabcontent {
   display: none;
   min-height: 180px;
   
}
.tabs{
  position: relative;
}
.tabcontent.active {
    transition: all 1s ease;
    display: block;
}
.dot{
  content: "";
  position: absolute;
  display: flex;
  transition: all 1s cubic-bezier(.27,.27,.86,.86);
  padding: 4px;
  background-color:lightskyblue;
  z-index: 1;
  border-radius: 99px;
  
}
.active#london ~ .dot{
  left: 0;
   opacity: 1;
}
.active#paris ~ .dot{
  left: 20%;
  opacity: 1;
}
.active#barcelona ~ .dot{
  left: 40%;
}
.active#madrid ~ .dot{
  left: 60%;
}

</style>