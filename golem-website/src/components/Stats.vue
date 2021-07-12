<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50 pt-12 sm:pt-16">
    <svg
      class="absolute z-0 right-full transform trans -translate-y-1/4	 translate-x-1/4 lg:translate-x-1/2"
      width="1204"
      height="484"
      fill="none"
      viewBox="0 0 404 784"
    >
      <defs>
        <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
    </svg>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-golemblue sm:text-4xl">
          Join an ever growing network of computers
        </h2>
        <p class="mt-3 text-xl text-gray-500 sm:mt-4">
          Many users from all over the world are already connected to the network.
        </p>
      </div>
    </div>
    <div class="mt-10 pb-12 bg-gray-50 sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 " />
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
              <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Providers
                </dt>
                <dd class="order-1 text-5xl font-extrabold text-golemblue">
                  728
                </dd>
              </div>
              <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Cores
                </dt>
                <dd class="order-1 text-5xl font-extrabold text-golemblue">
                  8739
                </dd>
              </div>
              <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Memory
                </dt>
                <dd class="order-1 text-5xl font-extrabold text-golemblue">
                  17 TB
                </dd>
              </div>
              <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Disk
                </dt>
                <dd class="order-1 text-5xl font-extrabold text-golemblue">
                  126 TB
                </dd>
              </div>
            </dl>
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
            <div class="flex items-center mx-auto text-center">
              <a href="https://stats.golem.network" target="_blank" class="flex items-center space-x-1 mx-auto">
                <a class="relative text-sm text-golemblue hover:text-gray-900 font-medium">
                  Explore our stats page
                </a>
                <button class="relative bg-white rounded-full focus:outline-none " type="button">
                  <span class="sr-only">test</span>
                  <ArrowRightIcon class="text-golemblue hover:text-blue-500 h-5 w-5" aria-hidden="true" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowRightIcon } from "@heroicons/vue/outline"
export default {
  components: {
    ArrowRightIcon,
  },
}
</script>
