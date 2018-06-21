<template>
  <section class="container">
    <h1>Sample</h1>
    <div>
      <textarea v-model="model"/>
      <div v-html="$md.render(model)"></div>
    </div>
    <div>
      <nuxt-link to="/markdown">
        markdown
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      model: ""
    }
  }
}
</script>

<style>
</style>
