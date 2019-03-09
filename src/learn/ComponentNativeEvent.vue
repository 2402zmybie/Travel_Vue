<template>
  <div @click="childClick">
    自组件
  </div>
</template>

<script>
    export default {
        name: "ComponentNativeEvent",
      methods: {
        childClick() {
          alert("childClick");
          this.$emit("click")
        }
      }
    }
</script>

<style scoped>

</style>
