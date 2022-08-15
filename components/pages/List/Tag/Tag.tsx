import React from 'react'

import { TagType } from '../List'
import S from './S'

export type TagProps = {
  tag: TagType
  isActive: boolean
  onClick: (id: number) => void
}

export const Tag = ({ tag, onClick, isActive }: TagProps) => {
  const handleClick = () => {
    onClick(tag.id)
  }

  return (
    <S.Base onClick={handleClick} isActive={isActive}>
      <S.Text>{tag.title}</S.Text>
    </S.Base>
  )
}
