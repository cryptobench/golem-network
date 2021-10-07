<template>
  <div class="relative transform motion-safe:hover:scale-110 bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div class="relative h-full max-w-7xl mx-auto">
          <svg
            class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width="400"
            height="150"
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
          <svg
            class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width="404"
            height="150"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-golemblue sm:text-4xl">
          Latest news from our blog
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          We constantly update our blog with the latest news. Check out the latest articles.
        </p>
      </div>
      <div v-if="posts" class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div
          v-for="post in posts"
          :key="post.title"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-105 "
        >
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="post.feature_image" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between ">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a :href="post.url" class="hover:underline">
                  Article
                </a>
              </p>
              <a :href="post.url" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.excerpt + "..." }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a :href="post.url">
                  <span class="sr-only">{{ post.title }}</span>
                  <img
                    v-if="post.primary_author.profile_image"
                    class="h-10 w-10 rounded-full"
                    :src="post.primary_author.profile_image"
                    alt=""
                  />
                  <img
                    v-else
                    class="h-10 w-10 rounded-full"
                    src="https://blog.golemproject.net/content/images/2019/02/logo-golem-5.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a :href="post.url" class="hover:underline">
                    {{ post.primary_author.name }}
                  </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time :datetime="post.updated_at">
                    {{ post.updated_at }}
                  </time>
                  <span aria-hidden="true">
                    &middot;
                  </span>
                  <span> 5 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      posts: {},
    }
  },
  created() {
    this.fetchData()
  },

  methods: {
    shorten: function shorten(str, maxLen, separator = " ") {
      if (str.length <= maxLen) return str
      return str.substr(0, str.lastIndexOf(separator, maxLen))
    },
    fetchData() {
      axios
        .get("https://blog.golemproject.net/ghost/api/v3/content/posts/?key=f30be928607dabd11d462d096d&include=tags,authors")
        .then((response) => {
          const slicedArray = response.data.posts.slice(0, 3)
          slicedArray.forEach(function(item) {
            item.updated_at = new Date(item.updated_at)
              .toDateString()
              .split(" ")
              .slice(1)
              .join(" ")
            if (item.excerpt.length <= 20) {
              return
            } else {
              item.excerpt = item.excerpt.substr(0, item.excerpt.lastIndexOf(" ", 200))
            }
          })
          this.posts = slicedArray
        })
    },
  },
}
</script>
