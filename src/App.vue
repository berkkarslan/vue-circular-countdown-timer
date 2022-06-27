<script>
import VueCountDown from './components/VueCountDown'
export default {
  components: { VueCountDown },
  data () {
    return {
      start: false
    }
  },
  methods: {
    doneEvent () {
      console.log('DONE')
    },
    startEvent () {
      this.start = true
    }
  }
}
</script>

<template>
<div>
  <button @click="startEvent">Start</button>
  <vue-count-down :setTime="10" :color="'#18d64a'" @done="doneEvent" :start="start" />
</div>
</template>

<style scoped>

</style>
