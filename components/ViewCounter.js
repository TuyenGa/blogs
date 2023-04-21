import { useEffect } from 'react'
import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

export default function ViewCounter({ slug, update = false }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  const views = new Number(data?.total)

  useEffect(() => {
    if (update)
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      })
  }, [slug, update])

  return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>
}
