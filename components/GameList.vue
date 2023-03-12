<script>
import GameCard from '~/components/GameCard'
import GamesFilters from '@/components/GamesFilters'
import GameSort from '@/components/GameSort'
export default {
  data() {
    return {
      showFilter: false,
      showSort: false,
    }
  },
  components: {
    GameCard,
    GamesFilters,
    GameSort,
  },
  computed: {
    gameList() {
      return this.$store.state.isFiltered
        ? this.$store.getters.getFilteredList
        : this.$store.state.list
    },
  },
  methods: {
    switchActive(active) {
      if (active === 'filter') {
        this.showSort = false
        setTimeout(() => {
          this.showFilter = !this.showFilter
        }, 300)
      } else {
        this.showFilter = false
        setTimeout(() => {
          this.showSort = !this.showSort
        }, 300)
      }
    },
  },
}
</script>
<template>
  <div class="gameList__wrapper">
    <div class="gameList__header">
      <div class="gameList__right">
        <v-btn
          class="gameList__button"
          :class="{ 'gameList__button--active': showFilter }"
          @click="switchActive('filter')"
          ><v-icon color="#fff">mdi-tune</v-icon>
        </v-btn>
        <v-btn
          class="gameList__button"
          :class="{ 'gameList__button--active': showSort }"
          @click="switchActive('sort')"
          ><v-icon color="#fff">mdi-sort</v-icon>
        </v-btn>
      </div>
    </div>
    <transition name="slide">
      <GamesFilters v-if="showFilter" />
    </transition>
    <transition name="slide">
      <GameSort v-if="showSort" />
    </transition>
    <ul class="gameList">
      <li v-for="(game, index) in gameList" :key="index">
        <GameCard :game="game" />
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.gameList {
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  grid-gap: 100px 36px;
  gap: 100px 36px;
  li {
    list-style-type: none;
  }
  &__wrapper {
    padding-bottom: 50px;
  }
  &__header {
    display: flex;
    height: 64px;
    align-items: center;
    border-bottom: 1px solid #f1f4f9;
    margin-bottom: 24px;
  }
  &__right {
    display: flex;
    gap: 0 16px;
  }
  &__button {
    background-color: #264181 !important;
    &--active {
      background-color: #ec1d2d !important;
    }
  }
}
.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
