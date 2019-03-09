<template>
  <div >
    <input type="text" v-model="inputValue"/>
    <button @click="handleBtnClick">提交</button>
    <ul>
      <todo-item v-for="(item,index) in list" :content="item" :index="index" :key="index" @delete="handleDelete(index)"></todo-item>
    </ul>
  </div>
</template>

<script>
    import TodoItem from "@/components/TodoItem"
    export default {
        components: {
          TodoItem:TodoItem
        },
        data() {
          return {
            inputValue:"",
            list:[]
          }
        },
      methods: {
        handleBtnClick() {
          this.list.unshift(this.inputValue)
          this.inputValue = "";
        },
        handleDelete(index) {
          this.list.splice(index,1)
        }
      }
    }

</script>

<style scoped>

</style>
