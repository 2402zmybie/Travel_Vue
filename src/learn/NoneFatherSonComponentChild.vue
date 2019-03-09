<template>
    <div @click="childDivClick">
      {{ content }}
    </div>
</template>

<script>
    export default {
        name: "NoneFatherSonComponentChild",
      props: {
          code: {
            type:String,
            required:true
          }
      },
      data() {
          return {
            content: this.code
          }
      },
      methods: {
        childDivClick() {
          //向外触发事件并且携带内容，其兄弟组件可以监听内容
            this.bus.$emit("change",this.content);
        }
      },
      mounted() {
          this.bus.$on("change",msg => {
            this.content = msg;
          })
      }
    }
</script>

<style scoped>

</style>
