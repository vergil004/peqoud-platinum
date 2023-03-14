<script>
import SerialList from '@/components/SerialList'
import GameInfo from '@/components/GameInfo'
export default {
  components: {
    SerialList,
    GameInfo,
  },
  head() {
    return {
      title: `Платина`,
    }
  },
  async mounted() {
    await this.$store.dispatch('fetchData')
    await this.$store.dispatch('setCurrentGAme', this.$route.params.game)
  },
  computed: {
    currentGame() {
      return this.$store.getters.getCurrentGame[0]
    },
    serialGame() {
      return this.$store.getters.getSerialGames(this.currentGame)
    },
  },
}
</script>
<template>
  <div class="game" v-if="currentGame">
    <GameInfo :current-game="currentGame" />
    <SerialList
      v-if="serialGame.length"
      :title="currentGame.serial"
      :games="serialGame"
    />
  </div>
</template>
<style scoped lang="scss">
@font-face {
  font-family: DMC;
  src: url('assets/fonts/DMC.ttf');
}
@font-face {
  font-family: PSFONT;
  src: url('assets/fonts/PsBold.ttf');
}
html * {
  font-family: Arial;
  box-sizing: border-box;
}
</style>
