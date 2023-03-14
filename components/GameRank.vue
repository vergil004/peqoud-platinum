<script>
export default {
  props: {
    letter: {
      type: String,
      required: true,
    },
    tip: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'default',
    },
  },
}
</script>
<template>
  <div class="rank" :class="{ 'rank--game': type === 'game' }">
    <div class="rank__letter">{{ letter }}</div>
    <div class="rank__tip">{{ tip }}</div>
  </div>
</template>
<style scoped lang="scss">
.rank {
  position: relative;
  width: 32px;
  height: 32px;
  display: flex;
  border-radius: 100%;
  border: 1px solid #264181;
  box-shadow: 0px 0px 10px 0px rgba(38, 65, 129, 0.6);
  color: #264181;
  &__letter {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 100%;
    background-color: #fff;
    font-family: DMC;
    font-size: 24px;
    font-weight: bold;
    color: #264181;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(10deg);
    z-index: 10;
    padding-top: 3px;
  }
  &__tip {
    position: absolute;
    top: -1px;
    left: 3px;
    width: 0;
    background-color: #fff;
    align-items: center;
    height: 32px;
    padding: 2px 10px 2px 28px;
    border-radius: 30px;
    font-size: 12px;
    line-height: 10px;
    display: none;
    border: 1px solid #264181;
    box-shadow: 0px 0px 10px 0px rgba(38, 65, 129, 0.6);
    z-index: 9;
  }
  &:hover {
    .rank__tip {
      display: flex;
      width: auto;
      transition: 0.4s ease-in;
    }
  }
  &--game {
    color: #ec1d2d;
    border: 1px solid #ec1d2d;
    box-shadow: 0px 0px 10px 0px rgba(166, 123, 44, 0.6);
    .rank__tip {
      border: 1px solid #ec1d2d;
      box-shadow: 0px 0px 10px 0px rgba(236, 29, 45, 0.6);
    }
    .rank__letter {
      color: #ec1d2d;
    }
  }
}
</style>
