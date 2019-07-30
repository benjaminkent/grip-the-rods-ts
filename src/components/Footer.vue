<template lang="pug">
  footer
    p
      | Made with 
      i.fas.fa-heart
      |  in St Petersburg, FL
    p
      | 2019 Benjamin Kent. 
      a(href='https://www.benjaminkent.io/' target='_blank' rel='noreferrer noopener') benjaminkent.io
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class AppHeader extends Vue {}
</script>

<style lang="scss" scoped>
footer {
  background-color: #333;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;

  p {
    color: #a1ff91;
    margin: 0;
  }

  i {
    color: #b200ff;
  }

  a {
    color: #a1ff91;
  }

  a:hover {
    color: #b200ff;
  }
}
</style>

