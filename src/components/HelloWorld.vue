<template>
  <div class="hello">
    <input type="text" v-model="inputValue"/>
    <button @click="handleBtnClick">提交</button>
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      inputValue: ""
    }
  },
  methods: {
    handleBtnClick() {
      this.list.unshift(this.inputValue);
      this.inputValue = "";
    }
  }
}
</script>

<style scoped>

</style>
