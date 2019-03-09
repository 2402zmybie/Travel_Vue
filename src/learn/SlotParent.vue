<template>
    <div>
      <SlotChild>
        <!--向子组件传递两个具名插槽-->
        <h1 slot="slot1">哈哈</h1>
        <div slot="slot2">呵呵</div>
      </SlotChild>
    </div>
</template>

<script>
  import SlotChild from "./SlotChild"
    export default {
        name: "SlotParent",
      components: {
        SlotChild
      }
    }
</script>

<style scoped>

</style>
