<template>
    <component-native-event @click="hanleClick"></component-native-event>
</template>

<script>
  import ComponentNativeEvent from './ComponentNativeEvent'
    export default {
        name: "ComponentNativeEventParent",
      components: {
        ComponentNativeEvent
      },
      methods: {
          //当没加native的时候 触发的是子组件的原生事件，而子组件想触发父组件的事件要使用$emit,自定义一个事件
        //而在组件上面加上native  监听的是原生事件而不是自定义事件（内部组件向外触发的事件）
        hanleClick() {
          alert("parent ....")
        }
      }
    }
</script>

<style scoped>

</style>
