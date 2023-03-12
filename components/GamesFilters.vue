<script>
export default {
  data() {
    return {
      showGameRank: false,
      showPlatinumRank: false,
      showPlatform: false,
      rarityFrom: 0,
      rarityTo: 100,
      isHard: false,
      gameRanks: [],
      platinumRanks: [],
      gamePlatform: [],
      ranks: ['S', 'A', 'B', 'C', 'D'],
      platforms: ['PS3', 'PS4', 'PS5', 'PSVITA'],
    }
  },
  methods: {
    submit() {
      this.$store.dispatch('filterData', {
        rarityTo: this.rarityTo,
        rarityFrom: this.rarityFrom,
        isHard: this.isHard,
        gameRanks: this.gameRanks,
        platinumRanks: this.platinumRanks,
        gamePlatform: this.gamePlatform,
      })
    },
    cancel() {
      this.rarityFrom = 0
      this.rarityTo = 100
      this.isHard = false
      this.gameRanks = []
      this.platinumRanks = []
      this.gamePlatform = []
      this.submit()
    },
  },
}
</script>
<template>
  <v-form @submit.prevent="submit">
    <div class="filter__item">
      <v-switch v-model="isHard" color="#ec1d2d" label="Есть сложный трофей" />
      <v-text-field
        v-model="rarityFrom"
        value="rarity"
        label="редкость платины от"
      />
      <v-text-field
        v-model="rarityTo"
        value="rarity"
        label="редкость платины до"
      />
    </div>
    <div class="filter__item">
      <v-switch
        v-model="showPlatinumRank"
        label="Фильтр рейтинга платин"
        color="#264181"
      />
      <v-switch
        v-model="showGameRank"
        label="Фильтр рейтинга игр"
        color="#ec1d2d"
      />
      <v-switch
        v-model="showPlatform"
        label="Фильтр платформ"
        color="#264181"
      />
    </div>
    <div class="filter__item">
      <div
        v-if="showPlatinumRank"
        class="filter__check--platinum filter__check"
      >
        <div class="filter__check-left">
          <v-checkbox
            v-for="(rank, index) in ranks"
            :value="rank"
            :label="rank"
            :key="index"
            hide-details
            v-model="platinumRanks"
            color="#264181"
          />
        </div>
        <v-btn
          :disabled="!platinumRanks.length"
          @click="platinumRanks = []"
          color="#264181"
          class="btn"
          ><v-icon color="#fff">mdi-filter-off</v-icon></v-btn
        >
      </div>
      <div v-if="showGameRank" class="filter__check">
        <div class="filter__check-left">
          <v-checkbox
            v-for="(rank, index) in ranks"
            :value="rank"
            :label="rank"
            :key="index"
            hide-details
            v-model="gameRanks"
            color="#ec1d2d"
          />
        </div>
        <v-btn
          :disabled="!gameRanks.length"
          @click="gameRanks = []"
          color="#ec1d2d"
          class="btn"
          ><v-icon color="#fff">mdi-filter-off</v-icon></v-btn
        >
      </div>
      <div v-if="showPlatform" class="filter__check--platinum filter__check">
        <div class="filter__check-left">
          <v-checkbox
            v-for="(platform, index) in platforms"
            :value="platform"
            :label="platform"
            :key="index"
            hide-details
            v-model="gamePlatform"
            color="#264181"
          />
        </div>
        <v-btn
          :disabled="!gamePlatform.length"
          @click="gamePlatform = []"
          color="#264181"
          class="btn"
          ><v-icon color="#fff">mdi-filter-off</v-icon></v-btn
        >
      </div>
    </div>
    <div class="filter__bottom">
      <v-btn class="btn" color="#ec1d2d" type="submit">Применить</v-btn>
      <v-btn class="btn" color="#264181" @click="cancel"
        >Сбросить фильтры</v-btn
      >
    </div>
  </v-form>
</template>
<style scoped lang="scss">
.filter {
  &__check {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 16px;
    border: 1px solid #ec1d2d;
    padding: 16px;
    &-left {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 10px 16px;
    }
    &--platinum {
      border: 1px solid #264181;
    }
    .btn {
      margin-left: 16px;
    }
    .v-input--selection-controls {
      margin-top: 0;
      display: flex;
      align-items: center;
    }
  }
  &__item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px 36px;
    gap: 24px 36px;
  }
  &__bottom {
    display: flex;
    padding: 24px 0;
    gap: 16px;
  }
}
.btn {
  font-size: 14px;
  color: #fff;
}
</style>
