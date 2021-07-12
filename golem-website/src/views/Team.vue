<template>
  <div class="home">
    <div class="hidden lg:block lg:absolute lg:inset-0 z-0" aria-hidden="true">
      <svg
        class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
        width="640"
        height="784"
        fill="none"
        viewBox="0 0 640 784"
      >
        <defs>
          <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
        <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
      </svg>
    </div>
    <Team class="z-10 relative" />
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
