<template>
  <div>
    <div class="setters">
      <div class="minutes-set">
        <button data-setter="minutes-plus">+</button>
        <button data-setter="minutes-minus">-</button>
      </div>
      <div class="seconds-set">
        <button data-setter="seconds-plus">+</button>
        <button data-setter="seconds-minus">-</button>
      </div>
    </div>
    <div class="circle">
      <svg width="300" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(110,110)">
          <circle r="100" class="e-c-base" />
          <g transform="rotate(-90)">
            <circle r="100" class="e-c-progress" />
            <g id="e-pointer">
              <circle cx="100" cy="0" r="8" class="e-c-pointer" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
button[data-setter] {
  outline: none;
  background: transparent;
  border: none;
  font-family: "Roboto";
  font-weight: 300;
  font-size: 18px;
  width: 25px;
  height: 30px;
  color: #f7958e;
  cursor: pointer;
}

button[data-setter]:hover {
  opacity: 0.5;
}

.setters {
  position: absolute;
  left: 85px;
  top: 75px;
}

.minutes-set {
  float: left;
  margin-right: 28px;
}

.seconds-set {
  float: right;
}

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
  color: #f7958e;
}

#pause {
  outline: none;
  background: transparent;
  border: none;
  margin-top: 10px;
  width: 50px;
  height: 50px;
  position: relative;
}

.play::before {
  display: block;
  content: "";
  position: absolute;
  top: 8px;
  left: 16px;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 22px solid #f7958e;
}

.pause::after {
  content: "";
  position: absolute;
  top: 8px;
  left: 12px;
  width: 15px;
  height: 30px;
  background-color: transparent;
  border-radius: 1px;
  border: 5px solid #f7958e;
  border-top: none;
  border-bottom: none;
}

#pause:hover {
  opacity: 0.8;
}

.e-c-base {
  fill: none;
  stroke: #b6b6b6;
  stroke-width: 4px;
}

.e-c-progress {
  fill: none;
  stroke: #f7958e;
  stroke-width: 4px;
  transition: stroke-dashoffset 0.7s;
}

.e-c-pointer {
  fill: #fff;
  stroke: #f7958e;
  stroke-width: 2px;
}

#e-pointer {
  transition: transform 0.7s;
}
</style>
