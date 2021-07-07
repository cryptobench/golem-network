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
          We constantly update our blog with the latest news. Check out our latest articles.
        </p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div
          v-for="post in posts"
          :key="post.title"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-105 "
        >
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between ">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a :href="post.category.href" class="hover:underline">
                  {{ post.category.name }}
                </a>
              </p>
              <a :href="post.href" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
              </a>
            </div>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <a :href="post.author.href">
                  <span class="sr-only">{{ post.author.name }}</span>
                  <img class="h-10 w-10 rounded-full" :src="post.author.imageUrl" alt="" />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  <a :href="post.author.href" class="hover:underline">
                    {{ post.author.name }}
                  </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time :datetime="post.datetime">
                    {{ post.date }}
                  </time>
                  <span aria-hidden="true">
                    &middot;
                  </span>
                  <span> {{ post.readingTime }} read </span>
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
const posts = [
  {
    title: "Golem Newsletter June",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Happy Summer! It’s hard to believe we’re already halfway through 2021. We’re very excited to share some updates from the past month with the community.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: "https://blog.golemproject.net/content/images/size/w2000/2021/07/unnamed-1.png",
    readingTime: "6 min",
    author: {
      name: "Golem Project",
      href: "#",
      imageUrl: "https://blog.golemproject.net/content/images/size/w100/2019/02/logo-golem-5.png",
    },
  },
  {
    title: "Golem Stats - A timeline of community input and collaboration",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Data collection can be a challenge to tackle for peer-to-peer networks. For a P2P marketplace such as Golem however, this information can be a useful tool for both providers and requestors in order to help individual participants build a pricing strategy and compare themselves to the rest of the market.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl: "https://blog.golemproject.net/content/images/size/w2000/2021/07/3Asset-3.png",
    readingTime: "4 min",
    author: {
      name: "Mattias Nystrøm",
      href: "#",
      imageUrl: "https://blog.golemproject.net/content/images/size/w100/2020/08/profile.png",
    },
  },
  {
    title: "Golem Network Beta.2 Bounties",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "The Golem Network offers an unstoppable, inexpensive and censorship-free environment. These bounty projects are taking in mind what’s awesome about the 2nd major release from a development perspective, such as the Services API and the possibility to create custom runtimes.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Golem Project",
      href: "#",
      imageUrl: "https://blog.golemproject.net/content/images/size/w100/2019/02/logo-golem-5.png",
    },
  },
]

export default {
  setup() {
    return {
      posts,
    }
  },
}
</script>
