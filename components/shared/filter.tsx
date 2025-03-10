import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectValue
} from '@/components/ui/select'

interface Props {
  filters: Array<{
    name: string
    value: string
  }>
  otherClasses: string
  containerClasses: string
}

export default function Filter ({
  filters,
  otherClasses,
  containerClasses
}: Props): React.JSX.Element {
  return (
    <div className={`${containerClasses}`}>
      <Select>
        <SelectTrigger className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}>
          <div className='line-clamp-1 flex-1 text-left'>
            <SelectValue placeholder='Select a Filter' />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

    </div>
  )
}
