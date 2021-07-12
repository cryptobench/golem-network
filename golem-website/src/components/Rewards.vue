<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div>
        <h2 class="text-base font-semibold text-golemblue uppercase tracking-wide">Golem is community first</h2>
        <p class="mt-2 text-3xl font-extrabold text-gray-900">GLM Rewards</p>
        <p class="mt-4 text-lg text-gray-500">
          At Golem we want to reward individuals in our community who is helpful and helps the ecosystem we are trying to build. For that
          reason we've created the monthly GLM rewards program, which gives individuals a chance to win GLM tokens based on their
          contributions.
        </p>
      </div>
      <div class="mt-12 lg:mt-0 lg:col-span-2">
        <dl class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <PuzzleIcon class="absolute h-6 w-6 text-golemblue" aria-hidden="true" />
              <p class="ml-9 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-9 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { PuzzleIcon } from "@heroicons/vue/outline"

const features = [
  {
    name: "Application Creation and Maintenance",
    description:
      "This category will focus on incentivizing both the creation and maintenance of applications that run on Golem. The Application Creation and Maintenance category will be one slot monthly, giving 4500 GLM in reward.",
  },
  {
    name: "Tech support",
    description:
      "This category is focused on helping other community members with technical issues they run into. There will be two slots monthly with 4000 GLM to each person.",
  },
  {
    name: "Super-user",
    description:
      "This category is focused on running and using Golem, plus requestors are favoured in this category. There is one bi-monthly slot with a reward of 2500 GLM.",
  },
  {
    name: "Task Force General",
    description:
      "This person does it all, tech support, content creation, using/running a node, enthusiastic (extra points if you engage in Github). There is one bi-monthly slot with a reward of 7000 GLM.",
  },
  {
    name: "Feedback Master",
    description:
      "This person gives feedback that ends up included in improving Golem. There is 2 monthly slots with a reward of 1000 GLM to each winner.",
  },
  {
    name: "Community Builder",
    description:
      "This category focuses on incentivizing community growth ideas and projects that Golem community members might take the initiative on their own to create. There is one bi-monthly slot with a reward of 1500 GLM.",
  },
  //   {
  //     name: "UX Research Participant",
  //     description:
  //       "This category focuses on taking part in the Golem interview study, user test sessions, a survey or any other research project (this category, however, is directed towards developers - and our DevRel will be conducting the reachout. Even though it is part of our public campaign, we need a specific developer profile from which we can source feedback from and through it, design our products). This category is not active by default but we will reach out when needed.",
  //   },
  //   {
  //     name: "UX Survey Participant",
  //     description:
  //       "This category focuses on taking part in the Golem short online surveys to give valuable feedback on Golem. This category is not active by default but we will reach out when needed.",
  //   },
]

export default {
  components: {
    PuzzleIcon,
  },
  setup() {
    return {
      features,
    }
  },
}
</script>
