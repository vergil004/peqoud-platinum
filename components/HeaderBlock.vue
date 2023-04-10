<script>
export default {
  computed: {
    platinumCount() {
      return this.$store.state.isFiltered
        ? this.$store.getters.getFilteredList.length
        : this.$store.state.list.length
    },
  },
  async mounted() {
    await this.$store.dispatch('fetchData')
  },
}
</script>
<template>
  <header class="header">
    <NuxtLink :to="`/`" class="header__logo"
      ><span>P</span>eqoud<span>P</span>latinum</NuxtLink
    >
    <div class="header__item">
      <v-btn color="#264181" class="header__add">+</v-btn>
    </div>
    <div class="header__item">
      <div class="header__count">{{ platinumCount }}</div>
    </div>
  </header>
</template>
<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 4px calc(50% - 600px);
  border-bottom: 1px solid #f1f4f9;
  background-color: #fff;
  z-index: 100;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  &__logo {
    height: 70px;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: PSFONT;
    color: #264181;
    font-weight: 700;
    font-size: 16px;
    span {
      color: #ec1d2d;
    }
  }
  &__count {
    font-size: 16px;
    font-family: PSFONT;
    background: #ec1d2d;
    border-radius: 10px;
    padding: 4px 10px;
    color: #ffffff;
    height: 36px;
  }
  &__add {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    width: 64px;
    height: 64px !important;
    min-width: 36px !important;
    border-radius: 100%;
    font-family: 'PSFONT';
    font-size: 36px;
    font-weight: 700;
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    &:last-child {
      justify-content: flex-end;
    }
  }
}
</style>
