import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Experience from '@/components/Experience'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    text2,
    text3,
    text4,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 xl:sticky xl:top-0 space-x-2">
            <Image
              src={avatar}
              alt="avatar"
              width="421px"
              height="525px"
              className="w-96 h-96 rounded"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
          </div>
          {/* <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">{children}</div> */}
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>{text1}</p>
            {/* <span>Are you interested in what I'm doing </span>
            <Link
              href={'/now'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              now{' '}
            </Link> */}
            <br />
            <p>
              <RoughNotation
                type="bracket"
                brackets={['left', 'right']}
                show={true}
                color="#FF0000"
              >
                {text2}
              </RoughNotation>
            </p>
            <br />
            <p>
              {text3} <br />
            </p>
            <p>
              {text4} <br />
            </p>
            <br />
            <p>
              Nếu có bất kì điều gì thắc mắc hoặc góp ý vui lòng liên hệ với tôi qua email:{' '}
              <RoughNotation type="highlight" show={true} color="#FBCFE8" animationDelay={1200}>
                <span className="dark:text-gray-700">tuyenvq.cntt@gmail.com</span>
              </RoughNotation>
              .
            </p>
          </div>
        </div>
        {/* <div className="mt-10">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Experience
            </h1>
          </div>
          <div className="pt-8 pb-8 max-w-none xl:col-span-2">
            {experienceData.map((d) => (
              <Experience
                key={d.company}
                title={d.title}
                company={d.company}
                location={d.location}
                range={d.range}
                url={d.url}
                text1={d.text1}
                text2={d.text2}
                text3={d.text3}
              />
            ))}
          </div>
        </div> */}
      </div>
    </>
  )
}
