<template>
  <div class="home bg-gray-50">
    <Capps />
  </div>
</template>

<script>
// @ is an alias to /src
import Capps from "@/components/Capps.vue"
export default {
  name: "Home",
  components: {
    Capps,
  },
}
</script>
