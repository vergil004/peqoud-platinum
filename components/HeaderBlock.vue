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
    <div class="header__count">{{ platinumCount }}</div>
  </header>
</template>
<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 calc(50% - 600px);
  border-bottom: 1px solid #f1f4f9;
  background-color: #fff;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  }
}
</style>
