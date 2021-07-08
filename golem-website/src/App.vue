<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: {
    Navigation,
    Footer,
  },
}
</script>
<style>
html,
body {
  width: 100%;
  height: 100vw;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
</style>
