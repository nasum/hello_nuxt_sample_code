<template>
  <div class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      console.log('loading start')
      this.loading = true
    },
    finish () {
      console.log('loading finish')
      this.loading = false
    },
    increase(num){
      console.log(num)
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: red;
  text-align: center;
  padding-top: 200px;
  font-size: 160px;
}
</style>