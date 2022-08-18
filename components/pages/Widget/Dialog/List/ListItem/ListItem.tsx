import React from 'react'

import { ItemType } from '~/redux-store/slices/types'

import S from './S'

export type ListItemProps = {
  item: ItemType
  isChecked: boolean
  isDisabled: boolean
  onSelect: (item: ItemType) => void
}

export const ListItem = ({
  item,
  isChecked,
  onSelect,
  isDisabled,
}: ListItemProps) => {
  const handleSelect = () => {
    isDisabled === false && onSelect(item)
  }
  return (
    <S.Base key={item.id}>
      <S.Label isDisabled={isDisabled}>
        <S.CheckBox
          type="checkbox"
          onChange={handleSelect}
          checked={isChecked}
          disabled={isDisabled}
        />
        {item.title}
      </S.Label>
    </S.Base>
  )
}
