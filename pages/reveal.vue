<template>
  <section>
  <h1>Scroll Down to Reveal Elements &#8595;</h1>
</section>
  <section class="reveal-section">
    <div class="container reveal">
      <h2>Caption</h2>
      <div class="text-container">
        <div class="text-box">
          <h3>Section Text</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius molestiae perferendis eos provident vitae iste.
          </p>
        </div>
        <div class="text-box">
          <h3>Section Text</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius molestiae perferendis eos provident vitae iste.
          </p>
        </div>
        <div class="text-box">
          <h3>Section Text</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius molestiae perferendis eos provident vitae iste.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="reveal-section">
    <div class="container reveal">
      <h2>Caption</h2>
      <div class="text-container">
        <div class="text-box">
          <h3>Section Text</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius molestiae perferendis eos provident vitae iste.
          </p>
        </div>
        <div class="text-box">
          <h3>Section Text</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius molestiae perferendis eos provident vitae iste.
          </p>
        </div>
        <div class="text-box">
          <h3>Section Text</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius molestiae perferendis eos provident vitae iste.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="reveal-section">
    <div class="container reveal">
      <h2>Caption</h2>
      <div class="text-container">
        <div class="text-box">
          <h3>Section Text</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius molestiae perferendis eos provident vitae iste.
          </p>
        </div>
        <div class="text-box">
          <h3>Section Text</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius molestiae perferendis eos provident vitae iste.
          </p>
        </div>
        <div class="text-box">
          <h3>Section Text</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            eius molestiae perferendis eos provident vitae iste.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  onMounted(()=>{
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);

  });
</script>

<style>
  .reveal-section{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .reveal-section:nth-child(1){
    color: #e0ffff;
    }
  .reveal-section:nth-child(2){
    color: #42455a;
    background: #e0ffff;
  } 
  .reveal-section:nth-child(3){
    color: #e0ffff;
  }
  .reveal-section:nth-child(4){
    color: #42455a;
    background: #e0ffff;
  }
  .reveal-section .container{
    margin: 100px;
  }
  .reveal-section h1{
    font-size: 3rem;
    margin: 20px;
  }
  .reveal-section h2{
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
  }
  .reveal-section .text-container{
    display: flex;
  }
  .reveal-section .text-container .text-box{
    margin: 20px;
    padding: 20px;
    background: #00c2cb;
  }
  .reveal-section .text-container .text-box h3{
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  @media (max-width: 900px){
    .reveal-section h1{
      font-size: 2rem;
      text-align: center;
    }
    .reveal-section .text-container{
      flex-direction: column;
    }
  }

  .reveal{
    position: relative;
    transform: translateY(150px);
    opacity: 0;
    transition: 1s all ease;
  }

  .reveal.active{
    transform: translateY(0);
    opacity: 1;
  }
</style>