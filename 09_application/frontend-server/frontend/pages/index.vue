<template>
  <div>
    hoge
    <div>
      {{ fetch_data }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fetch_data: ""
    }
  },
  async asyncData({ app }) {
    const hello_world = await app.$axios.$get('http://localhost:4567')
    return {
      fetch_data: hello_world
    }
  }
}
</script>
