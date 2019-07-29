<template lang="pug">
  .home-container
    .welcome-message
      p
        b Welcome 
        | to 
        em Grip The Rods
        | !
      p An app dedicated to helping Foosball enthusiasts generate teams and starting options.
      p Choose an option below to get started.
      p Good luck!
    router-link(to='/one-v-one' tag='h1')  One Vs One
    router-link(to='/two-v-two' tag='h1') Two Vs Two
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  cursor: pointer;
  margin: 10px 0;
}
h1:hover {
  color: #b200ff;
}

.welcome-message {
  margin-top: 20px;
  max-width: 300px;
  p {
    margin: 10px 0;
  }
}
</style>


