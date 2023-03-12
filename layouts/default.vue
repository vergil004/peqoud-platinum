<script>
import HeaderBlock from '@/components/HeaderBlock'
export default {
  name: 'DefaultLayout',
  components: {
    HeaderBlock,
  },
}
</script>

<template>
  <v-app class="default">
    <HeaderBlock />
    <div class="wrapper">
      <Nuxt />
    </div>
  </v-app>
</template>

<style lang="scss">
.wrapper {
  padding: 71px calc((100% - 1200px) / 2) 0;
}
</style>
