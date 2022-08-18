import React, { useState } from 'react'

import {
  __,
  media,
  useMediaQuery,
} from '~/helpers'

import { Dropdown } from './Dropdown'
import S from './S'
import { Tag } from './Tag'

export type TagType = {
  title: string
  id: number
}

export type ListProps = {
  tagsArray: TagType[]
  selectedTag: TagType
  onSelect: (id: number) => void
}

const TAGS_ARRAY: TagType[] = [
  { title: 'World Of Tanks', id: 0 },
  { title: 'World Of Warplanes', id: 1 },
  { title: 'World Of Warships', id: 2 },
]

export const List = () => {
  const isMobile = useMediaQuery(media.breaks.max.mobile)
  const [selectedTag, setSelectedTag] = useState<TagType>(TAGS_ARRAY[1])

  const handleSelectTag = (id: number) => {
    const tag = TAGS_ARRAY.find((tag) => tag.id === id)

    if (tag) {
      setSelectedTag(tag)
    } else {
      throw new Error('Tag not found')
    }
  }
  return (
    <>
      <S.Base>
        {isMobile ? (
          <Dropdown
            items={TAGS_ARRAY}
            onClick={handleSelectTag}
            selectedItem={selectedTag}
          />
        ) : (
          TAGS_ARRAY.map((tag) => (
            <Tag
              key={tag.id}
              tag={tag}
              isActive={tag.id === selectedTag.id}
              onClick={handleSelectTag}
            />
          ))
        )}
      </S.Base>
    </>
  )
}
