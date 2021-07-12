<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
<template>
  <!-- Background color split screen for large screens -->
  <div class="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
  <div class="fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true" />
  <div class="relative min-h-screen flex flex-col">
    <!-- Navbar -->
    <Disclosure as="nav" class="flex-shrink-0 bg-golemblue" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <!-- Logo section -->
          <div class="flex items-center px-2 lg:px-0 xl:w-64">
            <div class="flex-shrink-0">
              <img
                class="h-16 w-auto"
                src="https://assets-global.website-files.com/60005e3965a10f31d245af87/6006e3b6ecbaf06f4a811477_Golem_Logo_Negative_RGB.svg"
                alt="Workflow"
              />
            </div>
          </div>

          <!-- Search section -->
          <div class="flex-1 flex justify-center lg:justify-end">
            <div class="w-full px-2 lg:px-6">
              <label for="search" class="sr-only">Search Nodes</label>
              <div class="relative text-indigo-200 focus-within:text-gray-400">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  name="search"
                  class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                  placeholder="Search Nodes"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div class="flex lg:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
            >
              <span class="sr-only">Open main menu</span>
              <MenuAlt1Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <!-- Links section -->
          <div class="hidden lg:block lg:w-80">
            <div class="flex items-center justify-end">
              <div class="flex">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"
                  :aria-current="item.current ? 'page' : undefined"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="lg:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :class="[
              item.current ? 'text-white bg-indigo-800' : 'text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600',
              'block px-3 py-2 rounded-md text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</a
          >
        </div>
        <div class="pt-4 pb-3 border-t border-indigo-800">
          <div class="px-2 space-y-1">
            <a
              v-for="item in userNavigation"
              :key="item.name"
              :href="item.href"
              class="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
              >{{ item.name }}</a
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <!-- 3 column wrapper -->
    <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
      <!-- Left sidebar & main wrapper -->
      <div class="flex-1 min-w-0 bg-white xl:flex">
        <!-- Account profile -->
        <div class="xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white">
          <div class="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
            <div class="flex items-center justify-between">
              <div class="flex-1 space-y-8">
                <div class="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8">
                  <!-- Profile -->
                  <div class="flex items-center space-x-3 ">
                    <img
                      class="inline-block h-12 w-12 rounded-full bg-golemblue"
                      src="https://assets-global.website-files.com/60005e3965a10f31d245af87/6006e3b6ecbaf06f4a811477_Golem_Logo_Negative_RGB.svg"
                      alt=""
                    />

                    <div class="space-y-1">
                      <div class="text-sm font-medium text-gray-900">R4X</div>
                    </div>
                  </div>
                  <!-- Action buttons -->
                  <div class="flex flex-col sm:flex-row xl:flex-col">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-golemblue hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full"
                    >
                      New Node
                    </button>
                    <button
                      type="button"
                      class="mt-3 inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 xl:ml-0 xl:mt-3 xl:w-full"
                    >
                      Advanced Settings
                    </button>
                  </div>
                </div>
                <!-- Meta info -->
                <div class="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                  <div class="flex items-center space-x-2">
                    <CreditCardIcon class="h-5 w-5 text-golemblue" aria-hidden="true" />
                    <span class="text-sm text-gray-500 font-medium">2384.392 GLM</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <BadgeCheckIcon class="h-5 w-5 text-green-500" aria-hidden="true" />
                    <span class="text-sm text-gray-500 font-medium">Version 0.7.2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Projects List -->
        <div class="bg-white lg:min-w-0 lg:flex-1">
          <div class="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
            <div class="flex items-center">
              <h1 class="flex-1 text-lg font-medium">Nodes</h1>
              <Menu as="div" class="relative">
                <MenuButton
                  class="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <SortAscendingIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                  Sort
                  <ChevronDownIcon class="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                </MenuButton>
                <MenuItems
                  class="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Name</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
                        >Date modified</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
                        >Date created</a
                      >
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>
          <ul class="relative z-0 divide-y divide-gray-200 border-b border-gray-200">
            <li
              v-for="project in projects"
              :key="project.repo"
              class="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
            >
              <div class="flex items-center justify-between space-x-4">
                <!-- Repo name and link -->
                <div class="min-w-0 space-y-3">
                  <div class="flex items-center space-x-3">
                    <span
                      :class="[project.active ? 'bg-green-100' : 'bg-gray-100', 'h-4 w-4 rounded-full flex items-center justify-center']"
                      aria-hidden="true"
                    >
                      <span :class="[project.active ? 'bg-green-400' : 'bg-gray-400', 'h-2 w-2 rounded-full']" />
                    </span>

                    <span class="block">
                      <h2 class="text-sm font-medium">
                        <a :href="project.href">
                          <span class="absolute inset-0" aria-hidden="true" />
                          {{ project.name }} <span class="sr-only">{{ project.active ? "Running" : "Not running" }}</span>
                        </a>
                      </h2>
                    </span>
                  </div>
                  <a :href="project.repoHref" class="relative group flex items-center space-x-2.5">
                    <svg
                      v-if="project.status == 'Idle'"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span v-if="project.status == 'Idle'" class="text-sm text-gray-500 group-hover:text-gray-900 font-medium truncate">
                      {{ project.status }}
                    </span>
                    <span v-else class="text-sm text-yellow-500 group-hover:text-gray-900 font-medium truncate">
                      {{ project.status }}
                    </span>
                  </a>
                </div>
                <div class="sm:hidden">
                  <ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <!-- Repo meta info -->
                <div class="hidden sm:flex flex-col flex-shrink-0 items-end space-y-3">
                  <p class="flex items-center space-x-4">
                    <a :href="project.siteHref" class="relative text-sm text-gray-500 hover:text-gray-900 font-medium">
                      Detailed view
                    </a>
                    <button
                      class="relative bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      type="button"
                    >
                      <span class="sr-only">{{ project.starred ? "Add to favorites" : "Remove from favorites" }}</span>
                      <ArrowRightIcon
                        :class="[project.starred ? 'text-golemblue hover:text-blue-500' : 'text-gray-300 hover:text-gray-400', 'h-5 w-5']"
                        aria-hidden="true"
                      />
                    </button>
                  </p>
                  <p class="flex text-gray-500 text-sm space-x-2">
                    <span>Deployed {{ project.lastDeploy }}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{{ project.tasks }} Tasks computed</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- Activity feed -->
      <div class="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
        <div class="pl-6 lg:w-80">
          <div class="pt-6 pb-2">
            <h2 class="text-sm font-semibold">Activities</h2>
          </div>
          <div>
            <ul class="divide-y divide-gray-200">
              <li v-for="item in activityItems" :key="item.commit" class="py-4">
                <div class="flex space-x-3">
                  <img
                    class="h-6 w-6 rounded-full bg-golemblue"
                    src="https://assets-global.website-files.com/60005e3965a10f31d245af87/6006e3b6ecbaf06f4a811477_Golem_Logo_Negative_RGB.svg"
                    alt=""
                  />
                  <div class="flex-1 space-y-1">
                    <div class="flex items-center justify-between">
                      <h3 class="text-sm font-medium">{{ item.name }}</h3>
                      <p class="text-sm text-gray-500">{{ item.time }}</p>
                    </div>
                    <p class="text-sm text-gray-500">Successfully computed a task for a total duration of {{ item.seconds }} seconds</p>
                    <p class="text-sm text-green-500">+ {{ item.earnings }} GLM</p>
                  </div>
                </div>
              </li>
            </ul>
            <div class="py-4 text-sm border-t border-gray-200">
              <a href="#" class="text-indigo-600 font-semibold hover:text-indigo-900"
                >View all activity <span aria-hidden="true">&rarr;</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue"
import {
  BadgeCheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CreditCardIcon,
  SearchIcon,
  SortAscendingIcon,
  ArrowRightIcon,
} from "@heroicons/vue/solid"
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/outline"

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Settings", href: "#", current: false },
]
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
]
const projects = [
  {
    name: "capture-alpha",
    href: "#",
    siteHref: "#",
    repoHref: "#",
    repo: "Docker",
    tech: "Laravel",
    lastDeploy: "3h ago",
    location: "United states",
    starred: true,
    active: true,
    status: "Idle",
    tasks: "483",
  },
  {
    name: "starship",
    href: "#",
    siteHref: "#",
    repoHref: "#",
    repo: "Docker",
    tech: "Laravel",
    lastDeploy: "20m ago",
    location: "United states",
    starred: true,
    active: true,
    status: "Computing",
    tasks: "39",
  },
  // More projects...
]
const activityItems = [
  { name: "starship", seconds: "1238.3", earnings: "4.83", time: "1m" },
  { name: "capture-alpha", seconds: "302", earnings: "0.58", time: "2h" },
  { name: "capture-alpha", seconds: "39", earnings: "0.0038", time: "3h" },
  { name: "capture-alpha", seconds: "4723.3", earnings: "12.9", time: "4h" },
  // More items...
]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BadgeCheckIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    CreditCardIcon,
    MenuAlt1Icon,
    SearchIcon,
    SortAscendingIcon,
    ArrowRightIcon,
    XIcon,
  },
  setup() {
    const open = ref(false)

    return {
      navigation,
      userNavigation,
      projects,
      activityItems,
      open,
    }
  },
}
</script>
