import VueCountDown from './components/VueCountDown.vue'

const VueCountDownSimple = {
  install (Vue, options) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
    Vue.component('count-down', VueCountDown)
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueCountDownSimple)
}

export default VueCountDownSimple
