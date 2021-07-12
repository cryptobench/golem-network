<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
      <div class="lg:text-center">
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-golemblue sm:text-4xl">
          Previous winners of the GLM rewards program
        </p>
        <p class="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
          Meet the lovely community members that won last month.
        </p>
      </div>
    </div>
    <div class="max-w-7xl mx-auto  px-4 sm:px-6 lg:pt-8 pb-16 lg:px-8 lg:grid lg:grid-cols-1 lg:gap-x-8">
      <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="person in people" :key="person.name" class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          <div class="w-full flex items-center justify-between p-6 space-x-6">
            <div class="flex-1 truncate">
              <div class="flex items-center space-x-3">
                <h3 class="text-gray-900 text-sm font-medium truncate">{{ person.name }}</h3>
                <span class="flex-shrink-0 inline-block px-2 py-0.5 text-white text-xs font-medium bg-golemblue rounded-full">{{
                  person.platform
                }}</span>
              </div>
              <p class="mt-1 text-gray-500 text-sm truncate">{{ person.title }}</p>
            </div>
            <img class="w-10 h-10 bg-golemblue rounded-full flex-shrink-0" :src="person.imageUrl" alt="" />
          </div>
          <div>
            <div class="-mt-px flex divide-x divide-gray-200">
              <div class="w-0 flex-1 flex">
                <a
                  class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <StarIcon class="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <span class="ml-3 font-bold">{{ person.reward }} GLM</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { StarIcon } from "@heroicons/vue/solid"

const people = [
  {
    name: "bannanadjoe#4155 ",
    title: "Feedback Master",
    platform: "Discord",
    imageUrl: "https://assets-global.website-files.com/60005e3965a10f31d245af87/6006e3b6ecbaf06f4a811477_Golem_Logo_Negative_RGB.svg",
    reward: 1000,
  },
  {
    name: "TiaxtheGrand#1288 ",
    title: "Feedback Master",
    platform: "Discord",
    imageUrl: "https://assets-global.website-files.com/60005e3965a10f31d245af87/6006e3b6ecbaf06f4a811477_Golem_Logo_Negative_RGB.svg",
    reward: 1000,
  },
  {
    name: "blue-notes-robot#8841",
    title: "Tech Supporters",
    platform: "Discord",
    imageUrl: "https://assets-global.website-files.com/60005e3965a10f31d245af87/6006e3b6ecbaf06f4a811477_Golem_Logo_Negative_RGB.svg",
    reward: 4000,
  },
  {
    name: "Nebula#0166",
    title: "Tech Supporters",
    platform: "Discord",
    imageUrl: "https://assets-global.website-files.com/60005e3965a10f31d245af87/6006e3b6ecbaf06f4a811477_Golem_Logo_Negative_RGB.svg",
    reward: 4000,
  },
  {
    name: "stelballe#2785",
    title: "Task Force General",
    platform: "Discord + Reddit + Github",
    imageUrl: "https://assets-global.website-files.com/60005e3965a10f31d245af87/6006e3b6ecbaf06f4a811477_Golem_Logo_Negative_RGB.svg",
    reward: 7000,
  },
  {
    name: "krunch3r#2035",
    title: "Super User",
    platform: "Discord",
    imageUrl: "https://assets-global.website-files.com/60005e3965a10f31d245af87/6006e3b6ecbaf06f4a811477_Golem_Logo_Negative_RGB.svg",
    reward: 2500,
  },
  {
    name: "MSD#4683",
    title: "Application Creation and Maintenance",
    platform: "Discord",
    imageUrl: "https://assets-global.website-files.com/60005e3965a10f31d245af87/6006e3b6ecbaf06f4a811477_Golem_Logo_Negative_RGB.svg",
    reward: 4500,
  },
  {
    name: "jaspervv99",
    title: "Telegram Administrator",
    platform: "Telegram + Discord + Reddit",
    imageUrl: "https://assets-global.website-files.com/60005e3965a10f31d245af87/6006e3b6ecbaf06f4a811477_Golem_Logo_Negative_RGB.svg",
    reward: 1500,
  },

  // More people...
]

export default {
  components: {
    StarIcon,
  },
  setup() {
    return {
      people,
    }
  },
}
</script>
