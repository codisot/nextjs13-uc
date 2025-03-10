import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface MetricProps {
  imgUrl: string
  alt: string
  value: string | number
  title: string
  textStyles?: string
  href?: string
  isAuthor?: boolean
}

export default function Metric (
  {
    imgUrl,
    alt,
    value,
    title,
    textStyles = '',
    href,
    isAuthor
  }: MetricProps
): React.JSX.Element {
  const MetricContent = (
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain ${href != null ? 'rounded-full' : ''}`}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        <span className={`small-regular line-clamp-1 ${isAuthor != null ? 'max-sm:hidden' : ''}`}>
          {title}
        </span>
      </p>
    </>
  )
  if (href !== undefined && href !== null && href !== '') {
    return (
      <Link href={href} className='flex-center gap-1'>
        {MetricContent}
      </Link>
    )
  }
  return (
    <div className='flex-center flex-wrap gap-1'>
      {MetricContent}
    </div>
  )
}
