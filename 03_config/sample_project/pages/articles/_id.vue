<template>
<div>
  <div>Article： {{ $route.params.id }}</div>
  <p class="scroll">
    hogegehoge
  </p>
  <p class="box">
    fugafuga
  </p>
  <p class="box">
    foofoo
  </p>
  <p class="box">
    barbar
  </p>
</div>
</template>

<script>
export default {
  asyncData() {
    console.log('asyncData')
  },
  fetch() {
    console.log('fetch')
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: 500px;
  background: green;
}
</style>

