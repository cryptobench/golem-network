<template>
  <div class="home">
    <Hero />
    <Stats />
    <Sdk />
    <Platform2 />
    <Blog />
    <Banner class="z-30" />
  </div>
</template>

<script>
// @ is an alias to /src
import Stats from "@/components/Stats.vue"
import Hero from "@/components/Hero.vue"
import Blog from "@/components/Blog.vue"
import Banner from "@/components/Banner.vue"
import Platform2 from "@/components/Platform2.vue"
import Sdk from "@/components/Sdk.vue"
export default {
  name: "Home",
  components: {
    Stats,
    Blog,
    Banner,
    Hero,
    Sdk,
    Platform2,
  },
}
</script>
