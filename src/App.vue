<template lang="pug">
  .app-container
    .image-container
      .background-image
        img.background(src="./assets/foos.png" alt="foosball table")
    AppHeader
    router-view
    AppFooter
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'

@Component({
  components: {
    AppHeader,
    AppFooter
  }
})
export default class App extends Vue {}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Righteous|Rock+Salt&display=swap');

.app-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222;
  min-height: 100vh;
  display: block;
  position: relative;
  padding-bottom: 80px;
}
body,
html {
  margin: 0;
  height: 100%;
  position: relative;
}

.background-image {
  display: flex;
  justify-content: center;
}

.background {
  position: absolute;
  top: 100px;
  opacity: 0.05;
  height: 500px;
  z-index: -1;
}

@media (max-width: 505px) {
  .background {
    height: 300px;
  }
}
</style>
