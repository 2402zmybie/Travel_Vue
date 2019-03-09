<template>
    <div :class="{activated: isActived}" @click="handleDivClick">Hello World</div>
</template>

<script>
    export default {
        name: "StyleBindVue",
      data() {
          return {
            isActived:false
          }
      },
      methods: {
        handleDivClick() {
          this.isActived = !this.isActived
        }
      }
    }
</script>

<style scoped>
  .activated {
    color: red;
  }
</style>
