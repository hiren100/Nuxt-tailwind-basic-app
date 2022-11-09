<template>
<div>
  <h4 class="wordCarousel my-4 text-center text-blue-600 inline-block">
    <span>Word swipe animation: </span>
    <div>
        <!-- Use classes 2,3,4, or 5 to match the number of words -->
        <ul class="flip5 text-yellow-500 text-left">
            <li>Oh My!</li>
            <li>Swoosh</li>
            <li>Cool</li>
            <li>Squirrel</li>
            <li>Rad</li>
        </ul>
    </div>
  </h4>
<div class="text text-2xl mb-4">
  <p>Nachos are</p>
  <p class="text-yellow-500 ml-2 text-left">
    <span class="word wisteria">tasty.</span>
    <span class="word belize">wonderful.</span>
    <span class="word pomegranate">fancy.</span>
    <span class="word green">beautiful.</span>
    <span class="word midnight">cheap.</span>
  </p>
</div>  
</div> 
</template>


<script>

 onMounted(()=>{
var words = document.getElementsByClassName('word');
    var wordArray = [];
    var currentWord = 0;

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }

    function changeWord() {
      var cw = wordArray[currentWord];
      var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
      for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }
      
      for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
      }
      
      currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    }

    function animateLetterOut(cw, i) {
      setTimeout(function() {
        cw[i].className = 'letter out';
      }, i*80);
    }

    function animateLetterIn(nw, i) {
      setTimeout(function() {
        nw[i].className = 'letter in';
      }, 340+(i*80));
    }

    function splitLetters(word) {
      var content = word.innerHTML;
      word.innerHTML = '';
      var letters = [];
      for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
      }
      
      wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 4000);    
    
 });

</script>


<style scoped>
.wordCarousel {
  font-size: 36px;
  font-weight: 100;
}
.wordCarousel div {
  overflow: hidden;
  position: relative;
  float: right;
  height: 65px;
  padding-top: 10px;
  margin-top: -10px;
}
.wordCarousel div li {
  font-family: Serif;
  font-weight: 700;
  padding: 0 10px;
  height: 45px;
  margin-bottom: 45px;
  display: block;
}

.flip2 {
  -webkit-animation: flip2 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
          animation: flip2 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}

.flip3 {
  -webkit-animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
          animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}

.flip4 {
  -webkit-animation: flip4 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
          animation: flip4 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}

.flip5 {
  -webkit-animation: flip5 12s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
          animation: flip5 12s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}

@-webkit-keyframes flip2 {
  0% {
    margin-top: -180px;
  }
  5% {
    margin-top: -90px;
  }
  50% {
    margin-top: -90px;
  }
  55% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -180px;
  }
}

@keyframes flip2 {
  0% {
    margin-top: -180px;
  }
  5% {
    margin-top: -90px;
  }
  50% {
    margin-top: -90px;
  }
  55% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -180px;
  }
}
@-webkit-keyframes flip3 {
  0% {
    margin-top: -270px;
  }
  5% {
    margin-top: -180px;
  }
  33% {
    margin-top: -180px;
  }
  38% {
    margin-top: -90px;
  }
  66% {
    margin-top: -90px;
  }
  71% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}
@keyframes flip3 {
  0% {
    margin-top: -270px;
  }
  5% {
    margin-top: -180px;
  }
  33% {
    margin-top: -180px;
  }
  38% {
    margin-top: -90px;
  }
  66% {
    margin-top: -90px;
  }
  71% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}
@-webkit-keyframes flip4 {
  0% {
    margin-top: -360px;
  }
  5% {
    margin-top: -270px;
  }
  25% {
    margin-top: -270px;
  }
  30% {
    margin-top: -180px;
  }
  50% {
    margin-top: -180px;
  }
  55% {
    margin-top: -90px;
  }
  75% {
    margin-top: -90px;
  }
  80% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -360px;
  }
}
@keyframes flip4 {
  0% {
    margin-top: -360px;
  }
  5% {
    margin-top: -270px;
  }
  25% {
    margin-top: -270px;
  }
  30% {
    margin-top: -180px;
  }
  50% {
    margin-top: -180px;
  }
  55% {
    margin-top: -90px;
  }
  75% {
    margin-top: -90px;
  }
  80% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -360px;
  }
}
@-webkit-keyframes flip5 {
  0% {
    margin-top: -450px;
  }
  5% {
    margin-top: -360px;
  }
  20% {
    margin-top: -360px;
  }
  25% {
    margin-top: -270px;
  }
  40% {
    margin-top: -270px;
  }
  45% {
    margin-top: -180px;
  }
  60% {
    margin-top: -180px;
  }
  65% {
    margin-top: -90px;
  }
  80% {
    margin-top: -90px;
  }
  85% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -450px;
  }
}
@keyframes flip5 {
  0% {
    margin-top: -450px;
  }
  5% {
    margin-top: -360px;
  }
  20% {
    margin-top: -360px;
  }
  25% {
    margin-top: -270px;
  }
  40% {
    margin-top: -270px;
  }
  45% {
    margin-top: -180px;
  }
  60% {
    margin-top: -180px;
  }
  65% {
    margin-top: -90px;
  }
  80% {
    margin-top: -90px;
  }
  85% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -450px;
  }
}


/* changing text */
p {
  display: inline-block;
  vertical-align: top;
  margin: 0;
}

.word {
  position: absolute;
  width: 220px;
  opacity: 0;
}

.letter {
  display: inline-block;
  position: relative;
  float: left;
  transform: translateZ(25px);
  transform-origin: 50% 50% 25px;
}

.letter.out {
  transform: rotateX(90deg);
  transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.letter.behind {
  transform: rotateX(-90deg);
}

.letter.in {
  transform: rotateX(0deg);
  transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.wisteria {
  color: #8e44ad;
}

.belize {
  color: #2980b9;
}

.pomegranate {
  color: #c0392b;
}

.green {
  color: #16a085;
}

.midnight {
  color: #2c3e50;
}
</style>