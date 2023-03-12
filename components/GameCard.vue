<script>
import Fire from 'assets/images/fire.png'
import GameRank from '@/components/GameRank'

export default {
  props: {
    game: {},
  },
  components: {
    GameRank,
  },
  data() {
    return {
      images: {
        Fire,
      },
    }
  },
}
</script>
<template>
  <NuxtLink :to="`/${game.slug}`" class="game">
    <div class="game__image">
      <img :src="game.image" alt="изображение обложки" />
      <div class="game__rank">
        <GameRank :letter="game.platinum_rank" :tip="'Рейтинг платины'" />
        <GameRank
          :letter="game.game_rank"
          :tip="'Рейтинг игры'"
          :type="'game'"
        />
      </div>
      <div v-if="game.is_hard" class="game__fire">
        <img :src="images.Fire" alt="fire" />
      </div>
    </div>
    <div class="game__title">
      {{ game.title }}
    </div>
    <div class="game__platform">
      {{ game.platform }}
    </div>
    <div class="game__bottom">
      <div class="game__bottom-title">Редкость</div>
      <div class="game__rarity">
        {{ game.rarity }}
      </div>
    </div>
  </NuxtLink>
</template>
<style scoped lang="scss">
.game {
  width: 270px;
  background-size: cover;
  cursor: pointer;
  text-decoration: none;
  &__image {
    position: relative;
  }
  &__rank {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 32px;
    height: 32px;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 10px;
  }
  img {
    width: 100%;
    border-radius: 10px;
  }
  &__title {
    margin-top: 8px;
    color: #264181;
    font-size: 16px;
    font-weight: 700;
    min-height: 37px;
  }
  &__platform {
    font-family: PSFONT;
    font-size: 16px;
    color: #264181;
    margin-top: 10px;
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    &-title {
      font-size: 16px;
      color: #264181;
    }
  }
  &__rarity {
    background: #264181;
    color: #ffffff;
    font-family: PSFONT;
    padding: 2px 4px;
    border-radius: 4px;
  }
  &__fire {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    border: 1px solid #ec1d2d;
    img {
      width: 100%;
      border-radius: 100%;
    }
  }
  &:hover {
    transition: 0.2s ease-in;
    transform: translateY(5px);
  }
}
</style>
