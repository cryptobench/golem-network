<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover open="true" class="relative bg-golemblue">
    <div class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
      <div>
        <a href="/" class="flex">
          <span class="sr-only">Golem</span>
          <img class="h-8 w-auto sm:h-10 ml-4" src="https://svgshare.com/i/YvJ.svg" alt="" />
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <PopoverButton
          class="bg-white rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span class="sr-only">Open menu</span>
          <MenuIcon class="h-6 w-6" aria-hidden="true" />
        </PopoverButton>
      </div>
      <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
        <PopoverGroup as="nav" class="flex space-x-10">
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[open ? 'text-white' : 'text-white', 'group rounded-md inline-flex items-center text-base font-medium ']"
            >
              <span>Products</span>
              <ChevronDownIcon :class="[open ? 'text-white' : 'text-white', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel class="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                    <a
                      v-for="item in products"
                      :key="item.name"
                      :href="item.href"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <div
                        class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-golemblue text-white sm:h-12 sm:w-12"
                      >
                        <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[open ? 'text-white' : 'text-white', 'group rounded-md inline-flex items-center text-base font-medium ']"
            >
              <span>Developers</span>
              <ChevronDownIcon :class="[open ? 'text-white' : 'text-white', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel class="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                    <a
                      v-for="item in developers"
                      :key="item.name"
                      :href="item.href"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <div
                        class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-golemblue text-white sm:h-12 sm:w-12"
                      >
                        <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="p-5 bg-gray-50 sm:p-8">
                    <a href="#" class="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                      <div class="flex items-center">
                        <div class="text-base font-medium text-gray-900">
                          The recent beta 2 release introduced services!
                        </div>
                        <span
                          class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-red-600 text-white"
                        >
                          New
                        </span>
                      </div>
                      <p class="mt-1 text-sm text-gray-500">
                        With the introduction of services we also announced bounties. Check them out!
                      </p>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[open ? 'text-white' : 'text-white', 'group rounded-md inline-flex items-center text-base font-medium ']"
            >
              <span>Community</span>
              <ChevronDownIcon :class="[open ? 'text-white' : 'text-white', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel class="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                    <a
                      v-for="item in community"
                      :key="item.name"
                      :href="item.href"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <div
                        class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-golemblue text-white sm:h-12 sm:w-12"
                      >
                        <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="p-5 bg-gray-50 sm:p-8">
                    <a href="https://chat.golem.network" class="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                      <div class="flex items-center">
                        <div class="text-base font-medium text-gray-900">
                          Come chat with the community!
                        </div>
                        <span
                          class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800"
                        >
                          <img class="h-6 w-6 text-white" src="https://discord.com/assets/3437c10597c1526c3dbd98c737c2bcae.svg" />
                        </span>
                      </div>
                      <p class="mt-1 text-sm text-gray-500">
                        Discord is where it usually goes down. Come join us!
                      </p>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[open ? 'text-white' : 'text-white', 'group rounded-md inline-flex items-center text-base font-medium ']"
            >
              <span>GLM</span>
              <ChevronDownIcon :class="[open ? 'text-white' : 'text-white', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel class="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                    <a v-for="item in glm" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <div
                        class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-golemblue text-white sm:h-12 sm:w-12"
                      >
                        <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="p-5 bg-gray-50 sm:p-8">
                    <a href="#" class="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                      <div class="flex items-center">
                        <div class="text-base font-medium text-gray-900">
                          Exchange1 just created a GLM / BTC pair
                        </div>
                        <span
                          class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-red-600 text-white"
                        >
                          New
                        </span>
                      </div>
                      <p class="mt-1 text-sm text-gray-500">
                        Click to start trading the new pair!
                      </p>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[open ? 'text-white' : 'text-white', 'group rounded-md inline-flex items-center text-base font-medium ']"
            >
              <span>About</span>
              <ChevronDownIcon :class="[open ? 'text-white' : 'text-white', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel class="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                    <a
                      v-for="item in resources"
                      :key="item.name"
                      :href="item.href"
                      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <div
                        class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-golemblue text-white sm:h-12 sm:w-12"
                      >
                        <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="p-5 bg-gray-50 sm:p-8">
                    <a href="#" class="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                      <div class="flex items-center">
                        <div class="text-base font-medium text-gray-900">
                          We're hiring!
                        </div>
                        <span
                          class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-red-600 text-white"
                        >
                          New
                        </span>
                      </div>
                      <p class="mt-1 text-sm text-gray-500">
                        Building a decentralized cloud is not easy, so we're looking for talented people like you!
                      </p>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
        <div class="flex space-x-6 md:order-2">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-white">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
          <img class="h-6 w-6 text-white" src="https://svgshare.com/i/YuM.svg" />
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-6">
                <a
                  v-for="item in solutions"
                  :key="item.name"
                  :href="item.href"
                  class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-golemblue text-white">
                    <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </div>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue"
import { defineComponent, h } from "vue"

import {
  ChartBarIcon,
  MenuIcon,
  ShieldCheckIcon,
  XIcon,
  GlobeIcon,
  DownloadIcon,
  AcademicCapIcon,
  BookOpenIcon,
  FireIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  CollectionIcon,
  UserGroupIcon,
  SortDescendingIcon,
  RefreshIcon,
  EyeIcon,
  InformationCircleIcon,
} from "@heroicons/vue/outline"
import { ChevronDownIcon } from "@heroicons/vue/solid"

const community = [
  {
    name: "Featured Projects",
    description: "Selected projects built on Golem.",
    href: "/community",
    icon: FireIcon,
  },
  {
    name: "Awesome Golem",
    description: "List of all things Golem",
    href: "#",
    icon: CollectionIcon,
  },
  { name: "GLM Rewards", description: "Our Community Incetives Program.", href: "/community/rewards", icon: CurrencyDollarIcon },
  {
    name: "Upcoming Events",
    description: "Meetups and Hackathons",
    href: "#",
    icon: CalendarIcon,
  },
]
const developers = [
  {
    name: "SDK",
    description: "Develop apps using our Software Development Kit.",
    href: "#",
    icon: AcademicCapIcon,
  },
  {
    name: "Requestors Docs",
    description: "The official documentation for requestors.",
    href: "#",
    icon: BookOpenIcon,
  },
  { name: "Test Harness", description: "Help with development process", href: "#", icon: ShieldCheckIcon },
  {
    name: "Github",
    description: "Check out our Github Organizations profile..",
    href: "#",
    icon: defineComponent({
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "fill-rule": "evenodd",
            d:
              "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
            "clip-rule": "evenodd",
          }),
        ]),
    }),
  },
]
const products = [
  {
    name: "The Platform",
    description: "Golems Developer Preview.",
    href: "/platform",
    icon: GlobeIcon,
  },
  {
    name: "Become a Provider",
    description: "Earn tokens for providing your hardware to the network.",
    href: "#",
    icon: DownloadIcon,
  },
  { name: "Network Stats", description: "The official stats page for the Golem Network.", href: "#", icon: ChartBarIcon },
  { name: "GLM Migration Tracker", description: "The official tracker for the GLM token", href: "#", icon: EyeIcon },
]
const glm = [
  {
    name: "About the token",
    description: "GLM token info",
    href: "#",
    icon: InformationCircleIcon,
  },
  { name: "Migration", description: "How to migrate the token", href: "#", icon: RefreshIcon },
]
const resources = [
  {
    name: "Overview",
    description: "An overview of Golem's history",
    href: "/about",
    icon: SortDescendingIcon,
  },
  { name: "Team", description: "The minds behind the project.", href: "/about/team", icon: UserGroupIcon },
]

const navigation = {
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d:
                "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "Instagram",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d:
                "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "Twitter",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              d:
                "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
            }),
          ]),
      }),
    },
    {
      name: "GitHub",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d:
                "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
  ],
}

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      products,
      resources,
      navigation,
      community,
      developers,
      glm,
    }
  },
}
</script>
