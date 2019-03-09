<template>
    <div class="header">
      <div class="header-left">左侧</div>
      <div class="header-input">输入城市/景点/游玩</div>
      <div class="header-right">城市</div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style scoped lang="stylus">
  .header
    display flex
    line-height .86rem
    background #00bcd4
    color #ffffff
    .header-left
      width .64rem
      float left
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-left .2rem
      padding-left .10rem
      margin-top .12rem
      background #ffffff
      border-radius .1rem
      color #ccc
    .header-right
      width 1.24rem
      float right
      text-align center
</style>
