
'use client'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

interface CustomInputProps {
  route: string
  iconPosition: string
  imgSrc: string
  placeHolder: string
  otherClasses: string
}

export default function LocalSearchBar ({ route, iconPosition, imgSrc, otherClasses, placeHolder }: CustomInputProps): React.JSX.Element {
  return (
    <div className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}>
      {iconPosition === 'left' && (
        <Image
          src={imgSrc}
          alt='search icon'
          width={24}
          height={24}
          className='cursor-pointer'
        />
      )}
      <Input
        type='text'
        placeholder={placeHolder}
        className='paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none'
      />

      {iconPosition === 'right' && (
        <Image
          src={imgSrc}
          alt='search icon'
          width={24}
          height={24}
          className='cursor-pointer'
        />
      )}
    </div>
  )
}
