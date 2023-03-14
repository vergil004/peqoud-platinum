<template>
  <v-btn
    @click="sortFunc(action)"
    class="sortBtn"
    :class="{ 'sortBtn--active': down | up }"
  >
    {{ title }}
    <v-icon v-if="down">mdi-arrow-up</v-icon>
    <v-icon v-if="up">mdi-arrow-down</v-icon>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      down: false,
      up: false,
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  methods: {
    sortFunc(name) {
      if (!this.down && !this.up) {
        this.down = true
        this.$store.dispatch('setSortGame', { type: name, reverse: this.up })
      } else if (!this.up) {
        this.up = true
        this.down = false
        this.$store.dispatch('setSortGame', { type: name, reverse: this.up })
      } else {
        this.down = false
        this.up = false
        this.$store.dispatch('setSortGame', { type: 'id', reverse: true })
      }
    },
  },
}
</script>

<style scoped lang="scss">
.sortBtn {
  background-color: #264181 !important;
  color: white;
  &--active {
    background-color: #ec1d2d !important;
  }
}
</style>
