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
      <S.Wrapper isDisabled={isDisabled} onClick={handleSelect}>
        <S.CheckBox type="checkbox" checked={isChecked} disabled={isDisabled} />
        <S.Title>{item.title}</S.Title>
      </S.Wrapper>
    </S.Base>
  )
}
