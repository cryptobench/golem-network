import React, { useEffect } from "react"
import dateFormat from "dateformat"
import Link from "next/link"
import Image from "next/image"

export default function Example(props) {
  const post = props.post
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 relative">
      <Link href={"/blog/" + post.slug}>
        <div className="col-span-12 grid grid-cols-12 shadow-lg rounded-lg transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-105">
          <div className="col-span-12 lg:col-span-8 md:col-span-12 relative">
            <Image
              src={post.feature_image}
              alt={post.title}
              placeholder="blur"
              blurDataURL="|6RMlCxuayWF-:-:%Lt7t6?aRkWBoeM|ayayofj[~oRkWBt7IVM|IVj[ay9Ixtj[M|%Lt6xtWCoeIVWBoeWBofxt%LofWC~pRRayxtM|M|IVayWCkBxtj@WCofM|RQRkofRooet6Rkofxt%LfRRkt7Rkoft6ayofWCayRk"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
              className="rounded-l-lg "
            />
          </div>
          <div className="col-span-12 lg:col-span-4 md:col-span-12  bg-white rounded-r-lg  p-4">
            <div className="flex-1 bg-white p-6 mt-4 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a className="hover:underline">Guide</a>
                </p>
                <a className="block mt-2">
                  <p className="text-2xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-gray-500">{post.excerpt}</p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a>
                    <span className="sr-only">{post.primary_author.name}</span>
                    {post.primary_author.profile_image ? (
                      <div className="h-10 w-10 relative">
                        <Image
                          src={post.primary_author.profile_image}
                          alt={post.primary_author.name}
                          className=" rounded-full"
                          placeholder="blur"
                          blurDataURL="]97_5.og00M}~oj^ayfQofay02WB_1t79Ha$j[j[WBazM|j[t7WBWBogj[ayWCj[%Lj[IVayt6ogayWCofoft7ayM|j[%L"
                          layout="fill" // required
                          objectFit="cover" // change to suit your needs
                        />
                      </div>
                    ) : (
                      <div className="h-10 w-10 relative">
                        <Image
                          src="https://blog.golemproject.net/content/images/2019/02/logo-golem-5.png"
                          alt={post.primary_author.name}
                          className="rounded-full"
                          placeholder="blur"
                          blurDataURL="]97_5.og00M}~oj^ayfQofay02WB_1t79Ha$j[j[WBazM|j[t7WBWBogj[ayWCj[%Lj[IVayt6ogayWCofoft7ayM|j[%L"
                          layout="fill" // required
                          objectFit="cover" // change to suit your needs
                        />
                      </div>
                    )}
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a className="hover:underline">{post.primary_author.name}</a>
                  </p>
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
      </Link>
    </main>
  )
}
