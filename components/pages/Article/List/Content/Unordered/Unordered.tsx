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
  return (
    <S.UnorderedItem key={item.id}>
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
