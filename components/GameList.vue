<script>
import GameCard from '~/components/GameCard'
import GamesFilters from '@/components/GamesFilters'
import GameSort from '@/components/GameSort'
export default {
  data() {
    return {
      showFilter: false,
      showSort: false,
      isList: false,
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
    switchType() {
      this.isList = !this.isList
    },
  },
}
</script>
<template>
  <div class="gameList__wrapper">
    <div class="gameList__fixed">
      <div class="gameList__header">
        <div class="gameList__left">
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
        <div class="gameList__right">
          <v-btn
            @click="switchType"
            class="gameList__button"
            :class="{ 'gameList__button--active': !isList }"
            ><v-icon>mdi-view-comfy</v-icon></v-btn
          >
          <v-btn
            @click="switchType"
            class="gameList__button"
            :class="{ 'gameList__button--active': isList }"
            ><v-icon>mdi-view-list</v-icon></v-btn
          >
        </div>
      </div>
      <transition name="slide">
        <GamesFilters v-if="showFilter" />
      </transition>
      <transition name="slide">
        <GameSort v-if="showSort" />
      </transition>
    </div>
    <ul class="gameList" :class="{ 'gameList--list': isList }">
      <li v-for="(game, index) in gameList" :key="index">
        <GameCard :game="game" :is-list="isList" />
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.gameList {
  padding: 88px 0 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  grid-gap: 100px 36px;
  gap: 100px 36px;
  &--list {
    grid-template-columns: 1fr;
    gap: 16px 0;
  }
  li {
    list-style-type: none;
  }
  &__wrapper {
    padding-bottom: 50px;
  }
  &__fixed {
    position: fixed;
    width: 100%;
    padding: 0px calc((100% - 1200px) / 2) 0;
    top: 71px;
    left: 0;
    z-index: 11;
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 2px 17px 8px 0px rgba(34, 60, 80, 0.2);
  }
  &__header {
    display: flex;
    justify-content: space-between;
    height: 64px;
    align-items: center;
    border-bottom: 1px solid #f1f4f9;
    background-color: #fff;
  }
  &__left {
    display: flex;
    gap: 0 16px;
  }
  &__button {
    background-color: #264181 !important;
    color: white;
    &--active {
      background-color: #ec1d2d !important;
    }
  }
  &__right {
    display: flex;
    .gameList__button:first-child {
      margin-right: 16px;
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
