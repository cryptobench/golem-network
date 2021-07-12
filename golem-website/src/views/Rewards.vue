<template>
  <div class="home bg-gray-50">
    <Rewards />
    <Glmwinners />
    <RewardBlog />
  </div>
</template>

<script>
// @ is an alias to /src
import Rewards from "@/components/Rewards.vue"
import Glmwinners from "@/components/Glmwinners.vue"
import RewardBlog from "@/components/RewardBlog.vue"
export default {
  name: "Home",
  components: {
    Rewards,
    Glmwinners,
    RewardBlog,
  },
}
</script>
