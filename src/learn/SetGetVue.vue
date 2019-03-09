<template>
    <div>
      {{ fullName }}
      <br/>
      <button @click="btnClick">改变fullName为何 闰</button>
    </div>
</template>

<script>
    export default {
        name: "SetGetVue",
      data() {
          return {
            firstName:"he",
            lastName:"run",
            newData:"闰 何"
          }
      },
      computed: {
        fullName: {
          get() {
            return this.firstName + " " +  this.lastName
          },
          set(value) {
            var arr = value.split(" ");
            this.firstName = arr[0];
            this.lastName = arr[1];
          }
        }
      },
      methods: {
        btnClick() {
          this.fullName = this.newData
        }
      }
    }
</script>

<style scoped>

</style>
