<template>
  <div class="reservoir" :style="{height: waterLevel + '%'}">
    <div class="svg-container">
      <div class="text-transparent">{{reservoirName + ': ' + waterLevel + '%'}}</div>
      <div class="svg-layer"></div>
    </div>
    <!-- <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet"> -->
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
}

.text-transparent {
  background-image: url(http://embalsamando.com/back/assets/inverted-wave.svg);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  background-repeat: no-repeat;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
  font-size: 100px;
  font-family: 'Courier New', Courier, monospace;
  position: relative;
  z-index: 2;
  height: 100%;
}
.svg-layer {
  background-image: url(http://embalsamando.com/back/assets/wave.svg);
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
.svg-container {
  width: 100%;
  text-align: center;
  position: relative;
  height: 200px;
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
