<template>
    <div>
      <!--子组件写两个插槽，父组件可以向子组件传值（值就是标签），子组件也可以有默认值-->
      <slot name="slot1">
        <h6>我是子组件默认的，如果父组件没有传递插槽内容</h6>
      </slot>
      <slot name="slot2"></slot>
    </div>
</template>

<script>

    export default {
        name: "SlotChild",
    }
</script>

<style scoped>

</style>
