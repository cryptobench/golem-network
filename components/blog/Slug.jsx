import styles from "./Slug.module.css"
import dateFormat from "dateformat"
import Head from "next/head"

export default function Example(props) {
  const post = props.post
  console.log(post)
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} key="title" />
        <meta name="description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.feature_image} />
        <link rel="canonical" href={"golem-network.vercel.app/blog/" + post.slug} />

        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.feature_image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@golemproject" />
        <meta name="twitter:creator" content="@golemproject" />

        <meta property="og:site_name" content="Golem Network Blog" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta name="robots" content="index, follow" />

        <meta property="article:published_time" content={post.published_at} />
        <meta property="article:publisher" content="https://www.facebook.com/golemproject/" />
        <meta property="article:modified_time" content={post.updated_at} />
        <meta property="article:author" content={post.primary_author.name} />
        <meta property="article:section" content="HTML" />
        {post.tags.map((tag) => (
          <meta key={tag.id} property="article:tag" content={tag.name} />
        ))}

        <meta name="HandheldFriendly" content="True"></meta>
      </Head>

      <div className="bg-white relative mt-4 mb-10">
        <div className="grid grid-cols-12 mx-auto max-w-7xl px-4 sm:px-6 ">
          <article className={styles.blogpost}>
            <div className={styles.title}>
              <div className="col-span-12">
                <div className="grid text-center">
                  <div className="tags text-center text-golemblue">
                    {post.tags.map((tag) => (
                      <a key={tag.id} className="hover:underline text-sm inline-block mr-1">
                        #{tag.name}
                      </a>
                    ))}
                  </div>
                  <h1 className="text-9xl font-semibold text-black">{post.title}</h1>
                  <p className="mt-3 text-gray-500">{post.excerpt}</p>
                  <div className="mt-6 flex items-center border-t w-full py-4">
                    <div className="flex-shrink-0">
                      <a>
                        <span className="sr-only">{post.primary_author.name}</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://blog.golemproject.net/content/images/size/w100/2019/02/logo-golem-5.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <span className="-ml-20">
                        <a className="hover:underline">{post.primary_author.name}</a>
                      </span>

                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.published_at}>
                          {post.date}
                          {dateFormat(post.date, "dS mmm, yyyy")}
                        </time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.reading_time} min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="mb-10 rounded-lg" alt={post.title} src={post.feature_image}></img>

            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </article>
        </div>
      </div>
    </>
  )
}
