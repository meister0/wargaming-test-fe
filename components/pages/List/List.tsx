import React from 'react'

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

export const List = ({ tagsArray, onSelect, selectedTag }: ListProps) => {
  const isMobile = useMediaQuery(media.breaks.max.mobile)
  return (
    <>
      <S.Base>
        {isMobile ? (
          <Dropdown
            items={tagsArray}
            onClick={onSelect}
            selectedItem={selectedTag}
          />
        ) : (
          tagsArray.map((tag) => (
            <Tag
              key={tag.id}
              tag={tag}
              isActive={tag.id === selectedTag.id}
              onClick={onSelect}
            />
          ))
        )}
      </S.Base>
    </>
  )
}
