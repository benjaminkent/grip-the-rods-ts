<template lang="pug">
  .two-v-container
    .home-link
      router-link(to='/') Home
    form(@submit.prevent="onSubmit" v-if="enterNames")
      .input-group
        label(for="player-one") Player 1
        input(type="text" id="player-one" v-model="enteredPlayers[0]")
      .input-group
        label(for="player-two") Player 2
        input(type="text" id="player-two" v-model="enteredPlayers[1]")
      .input-group
        label(for="player-three") Player 3
        input(type="text" id="player-three" v-model="enteredPlayers[2]")
      .input-group
        label(for="player-four") Player 4
        input(type="text" id="player-four" v-model="enteredPlayers[3]")
      button(type="submit") Generate Team Names
    .team-container(v-if="showCards")
      .team
        Team(:teamData='teamOne')
      .team
        Team(:teamData='teamTwo')
      .buttons-container
        button(@click="regenerate") Regenerate Teams
        button.update-players(@click="updatePlayers") Update Players
    .cat-surprise(v-if="showCat")
      img(src="https://media.giphy.com/media/3oEduQAsYcJKQH2XsI/giphy.gif" alt="cat shooting cucumbers")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { TeamInterface } from '../interfaces'
import { shuffle } from 'lodash'
import Team from '../components/Team.vue'

import { adjectives } from '../data/adjectives'
import { nouns } from '../data/nouns'

@Component({
  components: {
    Team
  }
})
export default class TwoOnTwo extends Vue {
  public enteredPlayers: string[] = []
  public adjectives: string[] = []
  public nouns: string[] = []
  public enterNames: boolean = true
  public showCards: boolean = false
  public showCat: boolean = false
  public teamOne: TeamInterface = {
    players: [],
    adjective: '',
    noun: '',
    foosmen: '',
    servingFirst: false
  }
  public teamTwo: TeamInterface = {
    players: [],
    adjective: '',
    noun: '',
    foosmen: '',
    servingFirst: false
  }
  public foosmen: string[] = ['black', 'yellow']
  public servesFirst: number = 0
  public strings: string[] = ['one', 'two', 'three', 'four', 'five']

  public mounted() {
    this.adjectives = adjectives
    this.nouns = nouns
  }

  public onSubmit(): void {
    if (
      this.enteredPlayers.length !== 4 ||
      this.enteredPlayers.includes('') === true
    ) {
      return
    }
    this.enteredPlayers = shuffle(this.enteredPlayers)
    this.foosmen = shuffle(this.foosmen)
    this.setPlayers()
    this.setAdjectives()
    this.setNouns()
    this.setFoosmen()
    this.setServesFirst()
    this.enterNames = false
    this.showCards = true
  }

  public setPlayers(): void {
    this.teamOne.players = this.enteredPlayers.slice(0, 2)
    this.teamTwo.players = this.enteredPlayers.slice(2, 4)
  }

  public setAdjectives(): void {
    this.teamOne.adjective = this.adjectives[
      Math.floor(Math.random() * this.adjectives.length)
    ]
    this.teamTwo.adjective = this.adjectives[
      Math.floor(Math.random() * this.adjectives.length)
    ]
  }

  public setNouns(): void {
    this.teamOne.noun = this.nouns[
      Math.floor(Math.random() * this.nouns.length)
    ]
    this.teamTwo.noun = this.nouns[
      Math.floor(Math.random() * this.nouns.length)
    ]
  }

  public setFoosmen(): void {
    this.teamOne.foosmen = this.foosmen[0]
    this.teamTwo.foosmen = this.foosmen[1]
  }

  public setServesFirst(): void {
    this.servesFirst = Math.floor(Math.random() * 2)
    if (this.servesFirst === 0) {
      this.teamOne.servingFirst = true
      this.teamTwo.servingFirst = false
    } else {
      this.teamOne.servingFirst = false
      this.teamTwo.servingFirst = true
    }
  }

  public updatePlayers(): void {
    this.enterNames === true
      ? (this.enterNames = false)
      : (this.enterNames = true)
    this.showCards === true ? (this.showCards = false) : (this.showCards = true)
  }

  public regenerate(): void {
    this.enteredPlayers = this.teamOne.players.concat(this.teamTwo.players)
    this.onSubmit()
  }
}
</script>

<style lang="scss" scoped>
.two-v-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #222;
}

.home-link {
  min-width: 310px;
  max-width: 375px;
  margin-top: 10px;
  a {
    color: #222;
  }
  a:hover {
    color: #b200ff;
  }
}

form {
  min-width: 310px;
  max-width: 375px;
  margin: 10px;
}

.team-container {
  min-width: 310px;
  max-width: 375px;

  .team {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #b200ff30;
    border-radius: 5px;
    margin: 20px 0;
    padding: 20px 10px;
    box-shadow: 0px 0px 4px 2px #22222250;
    background-color: #222;
    color: #f2f2f2;

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
  }
}

.input-group {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
}

input {
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 12px;
  padding: 5px 0;
  text-indent: 5px;
}

button {
  margin-top: 10px;
  width: 100%;
  font-size: 16px;
  padding: 8px;
  border: 1px solid #b200ff;
  background-color: #b200ff;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #490068;
  border: 1px solid #490068;
}

.buttons-container {
  margin-top: 10px;
}

@media (min-width: 700px) {
  header {
    h1 {
      max-width: 310px;
    }
  }
}
</style>
