<template>
  <div class="home bg-gray-50">
    <Timeline />
  </div>
</template>

<script>
// @ is an alias to /src
import Timeline from "@/components/Timeline.vue"
export default {
  name: "Home",
  components: {
    Timeline,
  },
}
</script>
