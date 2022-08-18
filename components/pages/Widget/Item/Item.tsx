import React from 'react'

import { ItemType } from '~/redux-store/slices/types'

import S from './S'

export type ItemProps = {
  item: ItemType
  onUnselect: (id: number) => void
}

export const Item = ({ item, onUnselect }: ItemProps) => {
  return (
    <S.Base>
      <S.Title>{item.title}</S.Title>
      <S.UnselectButton onClick={() => onUnselect(item.id)}>x</S.UnselectButton>
    </S.Base>
  )
}
