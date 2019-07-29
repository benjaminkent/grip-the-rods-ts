<template lang="pug">
  .home-container
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
}
</style>


