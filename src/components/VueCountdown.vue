<template>
  <div>
    <div class="circle">
      <svg width="300" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(110,110)">
          <circle r="100" class="e-c-base" />
          <g transform="rotate(-90)">
            <circle r="100" class="e-c-progress" :style="{'stroke': color}" />
            <g id="e-pointer">
              <circle cx="100" cy="0" r="8" class="e-c-pointer" :style="{'stroke': color}" />
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div class="controlls">
      <div class="display-remain-time" :style="{'color': color}" >{{displayOutput}}</div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      progressBar: document.querySelector('.e-c-progress'),
      indicator: document.getElementById('e-indicator'),
      pointer: document.getElementById('e-pointer'),
      length: Math.PI * 2 * 100,
      displayOutput: '00:30',
      pauseBtn: document.getElementById('pause'),
      intervalTimer: () => {},
      timeLeft: 0,
      wholeTime: this.setTime, // manage this to set the whole time
      isPaused: false,
      isStarted: false
    }
  },
  props: {
    setTime: { type: Number, required: false, default: 30 },
    color: { type: String, required: false, default: '#32beeb' }
  },
  methods: {
    update (value, timePercent) {
      var offset = -this.length - this.length * value / (timePercent)
      document.querySelector('.e-c-progress').style.strokeDashoffset = offset
      this.pointer.style.transform = `rotate(${360 * value / (timePercent)}deg)`
    },
    changeWholeTime (seconds) {
      if ((this.wholeTime + seconds) > 0) {
        this.wholeTime += seconds
        this.update(this.wholeTime, this.wholeTime)
      }
    },
    timer (seconds) { // counts time, takes seconds
      let remainTime = Date.now() + (seconds * 1000)
      this.displayTimeLeft(seconds)
      this.intervalTimer = setInterval(function () {
        this.timeLeft = Math.round((remainTime - Date.now()) / 1000)
        if (this.timeLeft < 0) {
          clearInterval(this.intervalTimer)
          this.isStarted = false
          this.displayTimeLeft(this.wholeTime)
          return
        }
        this.displayTimeLeft(this.timeLeft)
      }.bind(this), 1000)
    },
    pauseTimer (event) {
      if (this.isStarted === false) {
        this.timer(this.wholeTime)
        this.isStarted = true
      } else if (this.isPaused) {
        this.timer(this.timeLeft)
        this.isPaused = !this.isPaused
      } else {
        clearInterval(this.intervalTimer)
        this.isPaused = !this.isPaused
      }
    },
    displayTimeLeft (timeLeft) { // displays time on the input
      let minutes = Math.floor(timeLeft / 60)
      let seconds = timeLeft % 60
      let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
      this.displayOutput = displayString
      this.update(timeLeft, this.wholeTime)
    }
  },
  mounted () {
    document.querySelector('.e-c-progress').style.strokeDasharray = this.length
    this.pointer = document.getElementById('e-pointer')
    this.update(this.wholeTime, this.wholeTime) // refreshes progress bar
    this.displayTimeLeft(this.wholeTime)
    this.pauseTimer()
  }
}

</script>

<style>
.controlls {
  position: absolute;
  left: 75px;
  top: 105px;
  text-align: center;
}

.display-remain-time {
  font-family: "Roboto";
  font-weight: 100;
  font-size: 65px;
}

.e-c-base {
  fill: none;
  stroke: #b6b6b6;
  stroke-width: 4px;
}

.e-c-progress {
  fill: none;
  stroke-width: 4px;
  transition: stroke-dashoffset 0.7s;
}

.e-c-pointer {
  fill: #fff;
  stroke-width: 2px;
}

#e-pointer {
  transition: transform 0.7s;
}
</style>
