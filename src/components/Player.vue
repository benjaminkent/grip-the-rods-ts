<template lang="pug">
  .player-container
    h2.players {{ playerAttributes.name }}
    p.nickname-text Nickname:
    h2.nickname {{ normalizeNickname }}
    p.foosmen Playing the {{ playerAttributes.foosmen }} foosmen
    p.serve(v-if='playerAttributes.servingFirst') Serving First
    p.serve(v-else) Get ready to defend!
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { PlayerInterface } from '../interfaces'

@Component({})
export default class Player extends Vue {
  @Prop({ default: 'default value' })
  public readonly playerAttributes!: PlayerInterface

  get normalizeNickname(): string {
    const noun = this.playerAttributes.noun
    const adj = this.playerAttributes.adjective
    const normalNoun = noun.charAt(0).toUpperCase() + noun.slice(1)
    const normalAdj = adj.charAt(0).toUpperCase() + adj.slice(1)
    return `${normalAdj} ${normalNoun}`
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 0;
  text-transform: capitalize;
  font-size: 20px;
}

p {
  margin: 0;
}

.player-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.serve {
  font-size: 14px;
}

.nickname-text {
  font-size: 14px;
}

.foosmen {
  font-size: 14px;
  margin: 3px 0;
}

.players {
  margin: 0;
  font-size: 16px;
  text-transform: capitalize;
  font-family: 'Rock Salt', cursive;
}
</style>

