<template>
  <div class="bg-white">
    <div class="max-w-4xl mx-auto  sm:px-6 sm:pt-20  lg:max-w-7xl lg:pt-24 lg:px-8">
      <h2 class="text-3xl font-extrabold text-golemblue tracking-tight">
        Selected projects built on top of Golem
      </h2>
      <p class="mt-4 max-w-3xl text-lg text-gray-500">
        We are going to promote the best projects that were built on top of
        <a class="font-bold" href="https://handbook.golem.network/">Golem SDK</a> by featuring them on our site. Stay tuned for the upcoming
        <span class="font-bold">Projects of the month</span> and <span class="font-bold">hackathons</span> if you wish to take part.
      </p>
      <div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
        <div v-for="feature in features" :key="feature.name">
          <div>
            <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
              <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-white">{{ feature.name }}</h3>
            <p class="mt-2 text-base text-indigo-200">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative bg-white pt-16 pb-32 overflow-hidden">
    <div class="relative">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
          <div>
            <div>
              <span class="h-12 w-12 rounded-md flex items-center justify-center bg-golemblue">
                <HeartIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl font-extrabold tracking-tight text-golemblue">
                Chess on Golem
              </h2>
              <p class="mt-4 text-lg text-gray-500">
                Chess on Golem shows that any state based game / problem can be run in Golem Network and solved interactively by provider
                nodes.
              </p>
              <div class="mt-6">
                <a
                  href="https://chessongolem.app"
                  class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-golemblue hover:bg-indigo-700"
                >
                  Check it out
                </a>
              </div>
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200 pt-6">
            <blockquote>
              <footer class="mt-3">
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0">
                    <img class="h-6 w-6 rounded-full" src="https://avatars.githubusercontent.com/u/22456155?v=4" alt="" />
                  </div>
                  <div class="text-base font-medium text-gray-700">
                    Pawel Burgchardt , Broadcasting enthusiast
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://i.imgur.com/lWrXAYc.png"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          <div>
            <div>
              <span class="h-12 w-12 rounded-md flex items-center justify-center bg-golemblue">
                <HeartIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                Golem Slate
              </h2>
              <p class="mt-4 text-lg text-gray-500">
                A codepen-like app built atop the Golem Network, featuring a slick UI, and a SPA (Single Page Application) that utilizes
                dockerized yagna environments to communicate with the Golem Network.
              </p>
              <div class="mt-6">
                <a
                  href="https://golem-slate.xyz"
                  class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-golemblue hover:bg-indigo-700"
                >
                  Check it out
                </a>
              </div>
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200 pt-6">
            <blockquote>
              <footer class="mt-3">
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0">
                    <img class="h-6 w-6 rounded-full" src="https://avatars.githubusercontent.com/u/22456155?v=4" alt="" />
                  </div>
                  <div class="text-base font-medium text-gray-700">
                    Derek Jarvis , Software Engineer
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>

        <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://i.imgur.com/Ia7XrzY.png"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative bg-white  overflow-hidden pt-8 pb-14">
    <div class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
      <div>
        <div class="mx-auto w-full mb-4">
          <span class="h-12 w-12 rounded-md mx-auto flex items-center justify-center bg-golemblue">
            <HeartIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </span>
        </div>
        <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          DeML (Decentralized Machine Learning)
        </p>
        <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500 mb-4">
          The first Proof Of Concept of DEcentralised Machine Learning on top of the Golem.
        </p>
        <a
          href="https://chessongolem.app"
          class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-golemblue hover:bg-indigo-700"
        >
          Check it out
        </a>
        <div class="mt-8 border-t max-w-3xl mx-auto border-gray-200 pt-6">
          <blockquote>
            <footer class="mt-3">
              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0">
                  <img class="h-6 w-6 rounded-full" src="https://avatars.githubusercontent.com/u/12889549?v=4" alt="" />
                </div>
                <div class="text-base font-medium text-gray-700">
                  Anshuman Agarwal, University Student
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HeartIcon } from "@heroicons/vue/outline"

export default {
  components: {
    HeartIcon,
  },
}
</script>
