<template>
  <div class="sort">
    <SortBtn title="Год" action="year" />
    <SortBtn title="Редкость платины" action="rarity" />
    <SortBtn title="Оценка Игры" action="game_rank" />
    <SortBtn title="Оценка Платины" action="platinum_rank" />
    <SortBtn title="Название игры" action="title" />
  </div>
</template>
<script>
import SortBtn from '@/components/SortBtn'
export default {
  components: {
    SortBtn,
  },
}
</script>
<style lang="scss" scoped>
.sort {
  display: flex;
  gap: 0 16px;
  padding-bottom: 24px;
}
</style>
