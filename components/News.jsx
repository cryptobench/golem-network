import Link from "next/link"
const posts = [
  {
    title: "Golem Beta V - Web Application Development toolset!",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: "https://blog.golemproject.net/content/images/size/w1000/2022/04/Cover-beta-5Asset-1.png",
    readingTime: "6 min",
    author: {
      name: "Mattias Nystrom",
      href: "#",
      imageUrl: "https://blog.golemproject.net/content/images/size/w100/2020/08/profile.png",
    },
  },
  {
    title: "GLM Rewards Program February Update",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl: "https://blog.golemproject.net/content/images/size/w1000/2022/03/Digest-18--1-.png",
    readingTime: "4 min",
    author: {
      name: "Mattias Nystrom",
      href: "#",
      imageUrl: "https://blog.golemproject.net/content/images/size/w100/2020/08/profile.png",
    },
  },
  {
    title: "GLM Rewards Program January Update",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: "https://blog.golemproject.net/content/images/size/w1000/2022/02/CIP-JanAsset-1.png",
    readingTime: "11 min",
    author: {
      name: "Mattias Nystrom",
      href: "#",
      imageUrl: "https://blog.golemproject.net/content/images/size/w100/2020/08/profile.png",
    },
  },
]

export default function Example(props) {
  const title = props.displayTitle
  const paddingtop = props.paddingTop
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="relative  pb-20 px-4 sm:px-6  lg:pb-28 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {title ? (
          <div className="">
            <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Blog</span>
            <h2 className="text-3xl mt-1 tracking-tight font-extrabold text-gray-900 sm:text-4xl">Latest News from Golem</h2>
            <p className="mt-3 max-w-2xl  text-xl text-slate-600 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
            </p>
          </div>
        ) : null}
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <Link key={post.title} href="/blog/test">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-105">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
