<template>
<div>
  <nuxt-link to="/articles">
    articles
  </nuxt-link>
  <br>
  <nuxt-link to="/sample">
    sample
  </nuxt-link>
</div>
</template>

<style lang="scss">
.my-active-class:after {
  color: white;
  content: "*";
  background-color: blue;
}

.my-exact-active-class:before {
  color: white;
  content: "!";
  background-color: red;
}
</style>
