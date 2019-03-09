<template>
    <li @click="handleItemDelete"> {{content}} </li>
</template>

<script>
    export default {
      props:['content',"index"],
      methods: {
        handleItemDelete() {
          //子组件向父组件发送事件
          this.$emit("delete",this.index)
        }
      }
    }
</script>

<style scoped>

</style>
