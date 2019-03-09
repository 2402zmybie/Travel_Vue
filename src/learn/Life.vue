<template>
    <div>Hello world</div>
</template>

<script>
    export default {
        name: "Life",
        beforeCreate() {
          console.log("beforeCreate")
        },
        created() {
          console.log("created")
        },
        beforeMount() {
          //数据还没有被挂载上去
          console.log("beforeMount...")
          console.log(this.$el)
        },
        mounted() {
          //数据已经挂载上去了
          console.log("mounted")
          console.log(this.$el)
        },
        beforeDestroy() {
          console.log("beforeDestory...")
        },
        destroyed() {
          console.log("destroyed.....")
        }
    }
</script>

<style scoped>

</style>
