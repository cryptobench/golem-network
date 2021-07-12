<template>
  <div class="home bg-gray-50">
    <Platform1 />
    <Platform2 />
  </div>
</template>

<script>
// @ is an alias to /src
import Platform1 from "@/components/Platform1.vue"
import Platform2 from "@/components/Platform2.vue"
export default {
  components: {
    Platform1,
    Platform2,
  },
}
</script>
