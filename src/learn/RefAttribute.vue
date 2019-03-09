<template>
    <div>
      <div ref="hello">
        Hello World
      </div>
    </div>
</template>

<script>
    export default {
        name: "RefAttribute",
      mounted() {
          console.log(this.$refs.hello);
      }
    }
</script>

<style scoped>

</style>
