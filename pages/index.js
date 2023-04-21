import classNames from 'classnames'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import ViewCounter from '@/components/ViewCounter'
import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <NewestPost
          posts={posts.filter((_, i) => {
            return i < 3
          })}
        />
      </div>
    </>
  )
}

function NewestPost({ posts }) {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold">New post</h3>
      <div className="flex flex-col gap-5 md:flex-row">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={classNames(
              'w-full transform rounded-xl bg-gradient-to-r p-1 transition-all duration-300 hover:scale-105 md:w-1/3 ',
              {
                'from-[#D8B4FE] to-[#818CF8]': i == 0,
                'from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]': i == 1,
                'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]': i == 2,
              }
            )}
          >
            <div className="bg-surface flex h-full flex-col justify-between rounded-lg p-4 ">
              <div className="flex flex-col justify-between md:flex-row">
                <h4 className="text-text mb-6 w-full text-lg font-medium sm:mb-10 md:text-lg ">
                  {post.title}
                </h4>
              </div>
              <div>
                <div className="text-subtle">
                  <ViewCounter slug={post.slug} />
                </div>
                <div>{formatDate(post.date)}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/blog"
        className="hover:text-text text-subtle mt-5 flex items-center transition-all"
      >
        See all posts
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  )
}
