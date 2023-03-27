<template>
  <div>
    <GameList />
  </div>
</template>

<style lang="scss">
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

<script>
import GameList from '@/components/GameList'
export default {
  name: 'IndexPage',
  components: {
    GameList,
  },
  head() {
    return {
      title: 'Мои Платиныasd',
    }
  },
}
</script>
