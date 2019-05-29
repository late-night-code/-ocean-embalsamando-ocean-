<template>
    <div>
        <svg style="width: 100%; height: 500px" version="1.1" id="sunnyIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" height="70px" viewBox="0 0 70 70" enable-background="new 0 0 70 70" xml:space="preserve">
            <g id="outerRepeat" data-svg-origin="35 35" transform="matrix(0.90784,0,0,0.90784,3.2255999999999396,3.2255999999999396)">
                <circle class="outerCircle" id="outer" fill="#FFE499" cx="35" cy="35" r="23.5" data-svg-origin="35 35" transform="matrix(1,0,0,1,0,0)"></circle>
            </g>
            <g id="middleRepeat" data-svg-origin="34.99999809265137 34.99999809265137" transform="matrix(0.80576,0,0,0.80576,6.7983996295165845,6.7983996295165845)">
                <circle id="middle" fill="#FFD766" cx="35" cy="35" r="18.1" data-svg-origin="34.99999809265137 34.99999809265137" transform="matrix(1,0,0,1,0,0)"></circle>
            </g>
            <circle id="inner" fill="#FFBC00" cx="35" cy="35" r="13.6" data-svg-origin="34.999999046325684 34.999999046325684" transform="matrix(1,0,0,1,0,0)"></circle>
		</svg>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@keyframes buttonTransition {
    from {
        transform: scale(0.8);
    }
    50% {
        transform: scale(1);
    }
    to {
        transform: scale(0.8);
    }
}

.outerCircle {
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-name: buttonTransition;
    transform-origin: center center;
}
</style>
