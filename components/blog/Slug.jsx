import styles from "./Slug.module.css"
import dateFormat from "dateformat"

export default function Example(props) {
  const post = props.post

  return (
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
          <img className="mb-10 rounded-lg" src="https://blog.golemproject.net/content/images/2022/04/GRP-MarchAsset-1-1.png"></img>

          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </article>
      </div>
    </div>
  )
}
