<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-golemblue font-semibold tracking-wide uppercase">The Platform</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-golemblue sm:text-4xl">
          A flexible, open-source platform for democratised access to digital resources
        </p>
        <p class="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
          Golem democratizes society’s access to computing power by creating a decentralized platform where anyone can build a variety of
          applications, request computational resources and/or offer their idle systems in exchange for cryptocurrency tokens (GLM)
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-golemblue text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { CubeIcon, LightningBoltIcon, GlobeIcon, TerminalIcon } from "@heroicons/vue/outline"

const features = [
  {
    name: "Easy access",
    description:
      "Built on Ethereum’s Layer 2, our payment system enables fast, cheap micropayments for our easily scalable services, eliminating gas fees, onboarding costs and other network congestion issues.",
    icon: GlobeIcon,
  },
  {
    name: "Unstoppable",
    description:
      "Build unstoppable applications atop the largest global decentralized network of digital resources and idle computing power.",
    icon: LightningBoltIcon,
  },
  {
    name: "No limitations",
    description:
      "The Golem Network is a peer-to-peer protocol – exchange GLM tokens for digital resource rental and build without limitations",
    icon: TerminalIcon,
  },
  {
    name: "Modular and cutting edge architecture",
    description: "Golem is very modular by design. Swap, remove or add a new component to the protocol easily.",
    icon: CubeIcon,
  },
]

export default {
  setup() {
    return {
      features,
    }
  },
}
</script>
