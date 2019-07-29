<template lang="pug">
  header
    router-link(to='/')
      img.logo(
        src="../assets/gtr-logo.png"
        alt="GTR"
      )
    router-link(to='/' tag='h1') Grip The Rods
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class AppHeader extends Vue {}
</script>

<style lang="scss" scoped>
header {
  margin: 0;
  padding: 5px 0;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #222;
  box-shadow: 0 0 4px 2px #555;
  background: repeating-linear-gradient(
    45deg,
    #333,
    #333 5px,
    #222 5px,
    #222 15px
  );
  display: flex;
  justify-content: center;

  .logo {
    height: 60px;
  }

  h1 {
    margin: 10px 0 0 10px;
    max-width: 80%;
    font-size: 28px;
    color: #a1ff91;
    border-radius: 3px;
    letter-spacing: 1px;
    font-family: 'Righteous', cursive;
    cursor: pointer;
  }
}
</style>

