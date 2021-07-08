<template>
  <div class="home">
    <Team />
    <JobBannerSticky />
  </div>
</template>

<script>
// @ is an alias to /src
import Team from "@/components/Team.vue"
import JobBannerSticky from "@/components/JobBannerSticky.vue"
export default {
  name: "Home",
  components: {
    Team,
    JobBannerSticky,
  },
}
</script>
