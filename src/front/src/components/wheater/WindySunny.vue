<template>
    <div>
        <svg style="width: 100%; height: 500px" version="1.1" id="windySunnyIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" height="70px" viewBox="0 0 70 70" enable-background="new 0 0 70 70" xml:space="preserve">
            <g id="sun_1_">
                <g id="outerRepeat" data-svg-origin="27.999999046325684 24.999999046325684" transform="matrix(0.804,0,0,0.804,5.487999813079831,4.899999813079834)">
                    <circle id="outer" fill="#FFE499" cx="28" cy="25" r="15.1" data-svg-origin="27.999999046325684 24.999999046325684" transform="matrix(1,0,0,1,0,0)"></circle>
                </g>
                <g id="middleRepeat" data-svg-origin="27.999998092651367 25.000000953674316" transform="matrix(0.9,0,0,0.9,2.7999998092651346,2.5000000953674295)">
                    <circle id="middle" fill="#FFD766" cx="28" cy="25" r="11.7" data-svg-origin="27.999998092651367 25.000000953674316" transform="matrix(1,0,0,1,0,0)"></circle>
                </g>
                <circle id="inner" fill="#FFBC00" cx="28" cy="25" r="8.8" data-svg-origin="28.000001907348633 25.000001907348633" transform="matrix(1,0,0,1,0,0)"></circle>
            </g>
            <g id="wind">
                <line class="stroke1" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="44.2" y1="32.2" x2="50.8" y2="32.2" data-svg-origin="44.20000076293945 32.20000076293945" style="opacity: 0.9585;" transform="matrix(0.95849,0,0,1,1.834300031662579,0)"></line>
                <line class="stroke2" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="41" y1="35.7" x2="56" y2="35.7" data-svg-origin="41 35.70000076293945" style="opacity: 0.9085;" transform="matrix(0.90849,0,0,1,3.751500000001016,0)"></line>
                <line class="stroke3" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="37" y1="39.2" x2="52.3" y2="39.2" data-svg-origin="37 39.20000076293945" style="opacity: 0.8585;" transform="matrix(0.85849,0,0,1,5.235500000000286,0)"></line>
                <line class="stroke4" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="22.6" y1="42.7" x2="52.3" y2="42.7" data-svg-origin="22.600000381469727 42.70000076293945" style="opacity: 0.8085;" transform="matrix(0.80849,0,0,1,4.327900073051886,0)"></line>
                <line class="stroke5" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="19.9" y1="46.1" x2="56" y2="46.1" data-svg-origin="19.899999618530273 46.099998474121094" style="opacity: 0.7585;" transform="matrix(0.75849,0,0,1,4.805849907875102,0)"></line>
                <line class="stroke6" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="19.2" y1="49.6" x2="54.7" y2="49.6" data-svg-origin="19.200000762939453 49.599998474121094" style="opacity: 0.7085;" transform="matrix(0.70849,0,0,1,5.596800222397109,0)"></line>
                <line class="stroke7" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="22.6" y1="53.1" x2="52.3" y2="53.1" data-svg-origin="22.600000381469727 53.099998474121094" style="opacity: 0.6585;" transform="matrix(0.65849,0,0,1,7.717900130272472,0)"></line>
                <line class="stroke8" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="25.5" y1="56.6" x2="50.7" y2="56.6" data-svg-origin="25.5 56.599998474121094" style="opacity: 0.6085;" transform="matrix(0.60849,0,0,1,9.983250000000197,0)"></line>
                <line class="stroke9" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="27.8" y1="60.1" x2="50" y2="60.1" data-svg-origin="27.799999237060547 60.099998474121094" style="opacity: 0.5585;" transform="matrix(0.55849,0,0,1,12.273699663162763,0)"></line>
            </g>
		</svg>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@keyframes dash {
  to {
    stroke-dashoffset: -100%;
  }
}

.stroke1 {
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  animation: dash 2s linear infinite;
}

.stroke2 {
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  animation: dash 2s linear infinite;
  animation-delay: 0.1s;
}

.stroke3 {
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  animation: dash 2s linear infinite;
  animation-delay: 0.2s;
}

.stroke4 {
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  animation: dash 2s linear infinite;
  animation-delay: 0.3s;
}

.stroke5 {
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  animation: dash 2s linear infinite;
  animation-delay: 0.4s;
}

.stroke6 {
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  animation: dash 2s linear infinite;
  animation-delay: 0.4s;
}

.stroke7 {
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  animation: dash 2s linear infinite;
  animation-delay: 0.5s;
}

.stroke8 {
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  animation: dash 2s linear infinite;
  animation-delay: 0.6s;
}

.stroke9 {
  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;
  animation: dash 2s linear infinite;
  animation-delay: 0.7s;
}


</style>
