<template>
  <div class="home">
    <Stats />
    <Mentions />
    <Blog />
    <Banner />
  </div>
</template>

<script>
// @ is an alias to /src
import Stats from "@/components/Stats.vue"
import Blog from "@/components/Blog.vue"
import Mentions from "@/components/Mentions.vue"
import Banner from "@/components/Banner.vue"
export default {
  name: "Home",
  components: {
    Stats,
    Blog,
    Mentions,
    Banner,
  },
}
</script>
