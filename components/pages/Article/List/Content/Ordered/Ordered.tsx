import React from 'react'

import {
  List,
  ListItem,
} from '../../'
import { Description } from '../S'
import S from './S'

export type OrderedProps = {
  item: ListItem
}

export const Ordered = ({ item }: OrderedProps) => {
  const withoutNested = typeof item === 'string'

  return withoutNested ? (
    <S.OrderedItem key={item}>
      <S.OrderedTitle>{`«${item}»`}</S.OrderedTitle>
    </S.OrderedItem>
  ) : (
    <S.OrderedItem key={item.title}>
      <S.OrderedTitle>{`«${item.title}»`}</S.OrderedTitle>
      {item.nested && (
        <Description>
          В данный пункт входит:
          {List(item.nested)}
        </Description>
      )}
    </S.OrderedItem>
  )
}
