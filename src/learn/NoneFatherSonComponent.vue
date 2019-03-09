<template>
   <div>
     <!-- 非父子组件间的传值， 利用bus总线的方式-->
     <NoneFatherSonComponentChild :code="name1"></NoneFatherSonComponentChild>
     <NoneFatherSonComponentChild :code="name2 + 'dfdfd'"></NoneFatherSonComponentChild>
   </div>
</template>

<script>
  import NoneFatherSonComponentChild from "./NoneFatherSonComponentChild"
    export default {
        name: "NoneFatherSonComponent",
      components: {
        NoneFatherSonComponentChild
      },
      data() {
          return {
            name1:"he",
            name2:"run"
          }
      }
    }
</script>

<style scoped>

</style>
