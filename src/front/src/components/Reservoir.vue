<template>
  <div class="reservoir" style="height: 800px">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none">
      <defs>
        <path id="gentle-wave"
          d="M-160 44c30 0
              58-18 88-18s
              58 18 88 18
              58-18 88-18
              58 18 88 18
              v44h-352z" />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="50" y="0" fill="#4579e2"/>
        <use xlink:href="#gentle-wave" x="50" y="3" fill="#3461c1"/>
        <use xlink:href="#gentle-wave" x="50" y="6" fill="#2d55aa"/>
      </g>
    </svg>
    <div class="title">
      <h1 contenteditable="true">Embalsamando "The deep blue"</h1>
    </div>

    <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet">
  </div>
</template>

<script>
export default {
  name: 'Reservoir',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::selection {
	background-color: salmon;
	color: white;
}

.parallax > use {
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

.reservoir svg {
	display: block;
	width: 100%;
	height: 10em;
	max-height: 100vh;
	margin: 0;
}

.title {
	font-family: 'Lato',sans-serif;
	text-align: center;
	background-color: #2d55aa;
	text-align: center;
	min-height: 75vh;
	margin: -.1em 0 0 0;
	padding: 1em;
	color: #eee;
	font-size: 2em;
	font-weight: 300;
	font-size: 1em;
}

.title h1 {
	margin-top: -1.3em;
	font-weight: 100;
	font-size: 5em;
	user-select: none;
	cursor: default;
}

/*prevent many large-by-comparison ripples by shrinking the height*/
@media (max-width: 50em) {
	.title h1 {
		font-size: 12vmax;
	}

	.editorial {
		height: 17vw;
	}
}

h1 {
	outline: none;
}

body {
	background-color: #234;
}
</style>
