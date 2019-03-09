<template>
    <div>
      <h3>计数器实例</h3>
      <RefExample_Counter ref="one" @change="handleChange" :chu="4"></RefExample_Counter>
      <RefExample_Counter ref="two" @change="handleChange" :chu="5"></RefExample_Counter>
      <div>{{ total }}</div>
    </div>
</template>

<script>
  import RefExample_Counter from './RefExample_Counter'
    export default {
        name: "RefExample",
      components: {
        RefExample_Counter
      },
      data() {
          return {
            total:0
          }
      },
      methods: {
        handleChange() {
          //this.$refs.组价  获取到的是子组件的引用
          this.total = this.$refs.one.number + this.$refs.two.number;
        }
      }
    }
</script>

<style scoped>

</style>
