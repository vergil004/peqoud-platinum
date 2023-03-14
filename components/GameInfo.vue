<template>
  <div class="game">
    <div
      class="game__title"
      :class="{ 'game__title--small': currentGame.title.length > 40 }"
    >
      {{ currentGame.title }}
    </div>
    <div class="game__cont">
      <v-carousel
        v-if="currentGame.gallery"
        cycle
        height="400"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(item, index) in currentGame.gallery"
          :key="index"
          :src="item"
        ></v-carousel-item>
      </v-carousel>
      <img
        class="game__image"
        v-else
        :src="currentGame.image"
        alt="изображение игры"
      />
      <div class="game__info">
        <div class="game__rarity game__item">
          Редкость платины:
          <span :class="{ 'game__item--red': currentGame.rarity < 1 }">{{
            currentGame.rarity
          }}</span>
        </div>
        <div class="game__rank game__item">
          Рейтинг платины:
          <span
            :class="{ 'game__item--red': currentGame.platinum_rank === 'S' }"
            >{{ currentGame.platinum_rank }}</span
          >
        </div>
        <div class="game__rank game__item">
          Рейтинг игры:
          <span :class="{ 'game__item--red': currentGame.game_rank === 'S' }">{{
            currentGame.game_rank
          }}</span>
        </div>

        <div class="game__year game__item">
          Год прохождения: <span>{{ currentGame.year }}</span>
        </div>

        <div class="game__platform game__item">
          Платформа/Пройдено на:
          <span
            >{{ currentGame.platform }} / {{ currentGame.play_platform }}</span
          >
        </div>
        <div class="game__item game__hardest">
          Самый сложный трофей: <span>{{ currentGame.most_hard }}</span>
        </div>
        <div class="game__item game__item-is" v-if="currentGame.is_hard">
          <div>Есть сложный и интересный трофей</div>
        </div>
        <div class="game__desc">{{ currentGame.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentGame: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.game {
  color: #264181;
  &__desc {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #f1f4f9;
  }
  &__image {
    max-width: 100%;
  }
  &__title {
    font-family: Arial;
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 24px;
    &--small {
      font-size: 36px;
    }
  }
  &__cont {
    display: grid;
    grid-template-columns: 1.75fr 1.25fr;
    gap: 24px;
  }
  &__info {
    margin-top: -10px;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 36px;
    font-size: 16px;
    span {
      text-align: right;
    }
    &-is {
      justify-content: flex-end;
      color: #ec1d2d;
    }
    &--red {
      color: #ec1d2d;
    }
  }
  &__platform {
    span {
      font-family: PSFONT;
    }
  }
  &__year {
    span {
      font-family: PSFONT;
    }
  }
  &__rarity {
    span {
      font-family: PSFONT;
    }
  }
  &__rank {
    span {
      font-family: DMC;
      font-weight: 700;
      font-size: 24px;
    }
  }
}
</style>
