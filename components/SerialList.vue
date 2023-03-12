<template>
  <div class="serial">
    <div class="serial__title">
      Другие игры серии <span>{{ title }}</span>
    </div>
    <ul class="serial__list" v-if="games.length > 0 && games.length < 5">
      <li v-for="game in games" :key="game.id">
        <GameCard :game="game"></GameCard>
      </li>
    </ul>
  </div>
</template>
<script>
import GameCard from '@/components/GameCard'
export default {
  props: {
    games: [],
    title: {
      type: String,
      default: '',
    },
  },
  components: {
    GameCard,
  },
}
</script>
<style scoped lang="scss">
.serial {
  margin-top: 24px;
  padding: 24px 0;
  border-top: 2px solid #f1f4f9;
  &__title {
    font-size: 24px;
    padding-bottom: 24px;
    font-weight: 700;
    span {
      color: #ec1d2d;
    }
  }
  &__list {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, 270px);
    grid-gap: 100px 36px;
    gap: 100px 36px;
    li {
      list-style-type: none;
    }
  }
}
</style>
