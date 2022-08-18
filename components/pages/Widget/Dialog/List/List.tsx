import React from 'react'

import { ItemType } from '~/redux-store/slices/types'

import { ListItem } from './ListItem'
import S from './S'

export type ListProps = {
  items: ItemType[]
  selectedItems: ItemType[]
  onSelect: (item: ItemType) => void
}

export const List = ({ items, selectedItems, onSelect }: ListProps) => {
  return (
    <S.Base>
      {items.map((item) => {
        const isChecked = selectedItems.some(
          (selectedItem) => selectedItem.id === item.id,
        )
        const isDisabled = selectedItems.length === 3 && !isChecked
        return (
          <ListItem
            key={item.id}
            item={item}
            isDisabled={isDisabled}
            isChecked={isChecked}
            onSelect={onSelect}
          />
        )
      })}
    </S.Base>
  )
}
