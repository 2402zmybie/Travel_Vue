<template>
    <div>
      <h3>计算属性，方法，侦听器（watch)</h3>
      <div>{{ fullName }}</div>
      <div>{{ age }}</div>
      <button @click="handleBtnClick">改变firstName</button>
    </div>
</template>

<script>
    export default {
        name: "ComputedAndWatchVue",
        data() {
          return {
            "firstName":"he",
            "lastName":"run",
            "fullName": "he run",
            age:27
          }
        },
      computed: {
          fullName2 () {
            console.log("计算属性计算了一次")
            return this.firstName + "---" + this.lastName
          }
      },
      methods: {
          fullNameMethod() {
            console.log("方法计算了一次")
            return this.firstName + "---" + this.lastName
          },
        handleBtnClick() {
            this.firstName = "he1"
        }
      },
      watch: {
        firstName() {
          console.log("firstName发生了变化")
          this.fullName = this.firstName + "~~~~" + this.lastName
        },
        lastName() {
          console.log("lastName发生了变化")
          this.fullName = this.firstName + "~~~~~" + this.lastName;
        }
      }
    }
</script>

<style scoped>

</style>
