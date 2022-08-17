import React from 'react'

import {
  List,
  ListItem,
} from '../../'
import { Description } from '../S'
import S from './S'

export type UnorderedProps = {
  item: ListItem
}

export const Unordered = ({ item }: UnorderedProps) => {
  const withoutNested = typeof item === 'string'

  return withoutNested ? (
    <S.UnorderedItem key={item}>
      <S.UnorderedTitle>{item}</S.UnorderedTitle>
    </S.UnorderedItem>
  ) : (
    <S.UnorderedItem key={item.title}>
      <S.UnorderedTitle>{item.title}</S.UnorderedTitle>
      {item.nested && (
        <Description>
          В данный пункт входит:
          {List(item.nested)}
        </Description>
      )}
    </S.UnorderedItem>
  )
}
