<template>
    <div>
      <!-- 给对象增加属性，或者改变数组的值绑定在vue上面-->
      <ul>
        <li v-for="(item,index,key) in obj">{{ item }}</li>
      </ul>
      <button @click="addAddressAttribute">给对象加一个属性address</button>
    </div>
</template>

<script>
    export default {
        name: "SetMethod",
      data() {
          return {
            obj: {
              name:"herun",
              age:27
            }
          }
      },
      methods: {
        addAddressAttribute() {
          this.$set(this.obj,"address","武汉的某个地方")
        }
      }
    }
</script>

<style scoped>

</style>
