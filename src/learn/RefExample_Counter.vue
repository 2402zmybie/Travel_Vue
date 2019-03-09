<template>
    <div @click="divClick">
      {{ number }}
      <button @click="handleClick">改变父组件传过来的值</button>
    </div>
</template>

<script>
    export default {
      name: "RefExample_Counter",
      props: ["chu"],
      data() {
          return{
            //单向数据流的概念，不能修改父组件传过来的值，则克隆一个模板出来
            number: this.chu
          }
      },
      methods: {
        divClick() {
          this.number++;
          this.$emit("change")
        },
        handleClick() {
          this.number++;
        }
      }
    }
</script>

<style scoped>

</style>
