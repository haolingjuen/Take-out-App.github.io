<template>
    <div>
      <span @click="LinkTo" class="iconfont" style="position: absolute;top: 0.74rem;left: 0.52rem;color: white ;font-size: 0.46rem;font-weight: bold">&#xe600;</span>
      <img src="../../../mock/header.png" style="width: 100%">
    </div>
</template>

<script>
    export default {
        name: "Header",
      methods:{
        LinkTo(){
          this.$router.push('/')
        }
      }
    }
</script>

<style scoped>

</style>
