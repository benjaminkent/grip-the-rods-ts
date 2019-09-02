<template lang="pug">
  .team-container
    h2 team {{ normalizeTeamName }}
    .top-line
    p.players {{ teamData.players[0] }} & {{ teamData.players[1] }}
    .bottom-line
    .team-setup
      p.foosmen Playing the {{ teamData.foosmen }} foosmen
      p.offordef {{ capitalizePlayerName(teamData.players[0]) }} on Offense, {{ capitalizePlayerName(teamData.players[1]) }} on Defense
      p.serve(v-if='teamData.servingFirst') Serving First
      p.serve(v-else) Get ready to defend!
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { TeamInterface } from '../interfaces'

@Component({})
export default class Team extends Vue {
  @Prop({ default: 'default value' }) public readonly teamData!: TeamInterface

  get normalizeTeamName(): string {
    const noun = this.teamData.noun
    const adj = this.teamData.adjective
    const normalNoun = noun.charAt(0).toUpperCase() + noun.slice(1)
    const normalAdj = adj.charAt(0).toUpperCase() + adj.slice(1)
    return `${normalAdj} ${normalNoun}`
  }

  public capitalizePlayerName(player: string): string {
    return player.split('')[0].toUpperCase() + player.slice(1)
  }
}
</script>

<style lang="scss" scoped>
.team-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top-line {
  border: 1px solid #a1ff9190;
  width: 70px;
  margin: 10px 0 5px 0;
}

.bottom-line {
  border: 1px solid #a1ff9190;
  width: 70px;
  margin: 10px 0;
}

h2 {
  margin: 0;
  text-transform: capitalize;
  font-size: 20px;
}

p {
  margin: 0;
}

.players {
  margin: 0;
  font-size: 16px;
  text-transform: capitalize;
  font-family: 'Rock Salt', cursive;
}

.team-setup {
  display: flex;
  flex-direction: column;
  align-items: center;

  .serve {
    font-size: 14px;
  }

  .foosmen {
    font-size: 14px;
    margin: 3px 0;
  }

  .offordef {
    font-size: 14px;
  }
}
</style>

