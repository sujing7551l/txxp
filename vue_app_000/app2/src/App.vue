<template>
  <div id="app">
    <keep-alive>
    <router-view/>
     </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

html, body, #app {
    width: 100%;
    height: 0px;
    margin: 0;
    padding: 0;
}
</style>
