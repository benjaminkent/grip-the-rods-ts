<template lang="pug">
  .home-container
    header
      img.logo(
        src="../assets/gtr-logo.png"
        alt="GTR"
      )
      h1 Grip The Rods
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
      .team(v-if="teamOne.players.length")
        h2 team {{ normalizeTeamOneName }}
        .top-line
        p.players {{ teamOne.players[0] }} & {{ teamOne.players[1] }}
        .bottom-line
        .team-setup
          p.serve(v-if="servesFirst === 0") {{ normalizeTeamOneName }} gets first serve
          p.serve(v-else) Get ready to defend!
          p.foosmen Playing the {{ teamOne.foosmen }} foosmen
          p.offordef {{ capitalizePlayerName(teamOne.players[0]) }} on Offense, {{ capitalizePlayerName(teamOne.players[1]) }} on Defense
      .team(v-if="teamTwo.players.length")
        h2 team {{ teamTwo.adjective }} {{ teamTwo.noun }}
        .top-line
        p.players {{ teamTwo.players[0] }} & {{ teamTwo.players[1] }}
        .bottom-line
        .team-setup
          p.serve(v-if="servesFirst === 1") {{ normalizeTeamTwoName }} gets first serve
          p.serve(v-else) Get ready to defend!
          p.foosmen Playing the {{ teamTwo.foosmen }} foosmen
          p.offordef {{ capitalizePlayerName(teamTwo.players[0]) }} on Offense, {{ capitalizePlayerName(teamTwo.players[1]) }} on Defense
      .buttons-container
        button(@click="regenerate") Regenerate Teams
        button.update-players(@click="updatePlayers") Update Players
    .cat-surprise(v-if="showCat")
      img(src="https://media.giphy.com/media/3oEduQAsYcJKQH2XsI/giphy.gif" alt="cat shooting cucumbers")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { adjectives } from '../data/adjectives'
import { nouns } from '../data/nouns'

@Component({})
export default class Home extends Vue {
  enteredPlayers = []
  adjectives: string[] = []
  nouns: string[] = []
  enterNames = true
  showCards = false
  showCat = false
  teamOne = {
    players: [],
    adjective: '',
    noun: '',
    foosmen: ''
  }
  teamTwo = {
    players: [],
    adjective: '',
    noun: '',
    foosmen: ''
  }
  foosmen = ['black', 'yellow']
  servesFirst: number = 0

  mounted() {
    this.adjectives = adjectives
    this.nouns = nouns
  }

  shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  onSubmit() {
    if (this.enteredPlayers.length !== 4) {
      return
    }
    this.shuffle(this.enteredPlayers)
    this.shuffle(this.foosmen)
    this.setPlayers()
    this.setAdjectives()
    this.setNouns()
    this.setFoosmen()
    this.setServesFirst()
    this.enterNames = false
    this.showCards = true
  }

  setPlayers() {
    this.teamOne.players = this.enteredPlayers.slice(0, 2)
    this.teamTwo.players = this.enteredPlayers.slice(2, 4)
  }

  setAdjectives() {
    this.teamOne.adjective = this.adjectives[
      Math.floor(Math.random() * this.adjectives.length)
    ]
    this.teamTwo.adjective = this.adjectives[
      Math.floor(Math.random() * this.adjectives.length)
    ]
  }

  setNouns() {
    this.teamOne.noun = this.nouns[
      Math.floor(Math.random() * this.nouns.length)
    ]
    this.teamTwo.noun = this.nouns[
      Math.floor(Math.random() * this.nouns.length)
    ]
  }

  setFoosmen() {
    this.teamOne.foosmen = this.foosmen[0]
    this.teamTwo.foosmen = this.foosmen[1]
  }

  setServesFirst() {
    this.servesFirst = Math.floor(Math.random() * 2)
  }

  updatePlayers() {
    this.enterNames === true
      ? (this.enterNames = false)
      : (this.enterNames = true)
    this.showCards === true ? (this.showCards = false) : (this.showCards = true)
  }

  regenerate() {
    this.enteredPlayers = this.teamOne.players.concat(this.teamTwo.players)
    this.onSubmit()
    console.log('ts app')
  }

  capitalizePlayerName(player: string) {
    return player.split('')[0].toUpperCase() + player.slice(1)
  }

  get normalizeTeamOneName() {
    let noun = this.teamOne.noun
    let adj = this.teamOne.adjective
    let normalNoun = noun.charAt(0).toUpperCase() + noun.slice(1)
    let normalAdj = adj.charAt(0).toUpperCase() + adj.slice(1)
    return `${normalAdj} ${normalNoun}`
  }

  get normalizeTeamTwoName() {
    let noun = this.teamTwo.noun
    let adj = this.teamTwo.adjective
    let normalNoun = noun.charAt(0).toUpperCase() + noun.slice(1)
    let normalAdj = adj.charAt(0).toUpperCase() + adj.slice(1)
    return `${normalAdj} ${normalNoun}`
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous|Rock+Salt&display=swap');

.home-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 100vw;
  color: #222;
}

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
