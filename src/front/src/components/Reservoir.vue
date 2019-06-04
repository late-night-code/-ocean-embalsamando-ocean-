<template>
  <div class="reservoir" :style="{height: waterLevel + '%'}">
    <div class="svg-container">
      <div id="title" class="text-transparent animated">{{reservoirName}}</div>
      <div class="svg-layer"></div>
      <p class="water-percentage animated delay-4s slideInRight">{{waterLevel + '%'}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reservoir',
  data () {
    return {
      height: 0,
      iterator:0
    }
  },
  props: {
    reservoirName: {
      type: String,
    },
    waterLevel: {
      type: String,
    }
  },
  watch: {
    reservoirName: function() {
      var element = document.getElementById("title")
      element.classList.add("zoomIn")
    }
  },
  mounted () {
    // console.log('Current height: ' + this.data)

    // if(this.data!=='null'){
    //   this.interval = setInterval(() => {
    //     if(this.iterator < this.data.length){
    //       this.height = this.data[this.iterator]
    //       this.iterator += 1
    //       // console.log('Current height: ' + this.height)
    //     } else {
    //       // console.log('Interval end')
    //       clearInterval(this.interval)
    //     }
    //   }, 1000)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.parallax > use {
  bottom: 0;
	animation: move-forever 12s linear infinite;
}

.parallax > use:nth-child(1) {
	animation-delay: -2s;
  font-family: 'Courier New', Courier, monospace;
}

.parallax > use:nth-child(2) {
	animation-delay: -2s;
	animation-duration: 5s;
}

.parallax > use:nth-child(3) {
	animation-delay: -4s;
	animation-duration: 3s;
}

@keyframes move-forever {
	0% {
		transform: translate(-90px, 0%);
	}

	100% {
		transform: translate(85px, 0%);
	}
}

.reservoir {
  bottom: 0;
  width: 100%;
  position: fixed;
  background-color: #2d55aa;
  transition: height ease 1s;
  transition-delay: 1s;
}

.text-transparent {
  background-image: url(https://embalsamando.com/back/assets/inverted-wave.svg);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  background-repeat: no-repeat;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
  font-size: 100px;
  position: relative;
  z-index: 2;
  height: 100%;
}
.svg-layer {
  background-image: url(https://embalsamando.com/back/assets/wave.svg);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
  z-index: 1;
}

.water-percentage {
  color: white;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 5px;
  margin-bottom: 0;
  z-index: 5;
}

.water-percentage:after {
  position: absolute;
  right: -5px;
  bottom: -3px;
  width: 20px;
  height: 1px;
  content: ' ';
  background-color: white;
}

.svg-container {
  width: 100%;
  text-align: center;
  position: relative;
  height: 205px;
  top: -200px;
}

/*prevent many large-by-comparison ripples by shrinking the height*/
@media (max-width: 50em) {
	.title h1 {
		font-size: 12vmax;
	}

	.reservoir {
		height: 17vw;
	}
}

</style>
