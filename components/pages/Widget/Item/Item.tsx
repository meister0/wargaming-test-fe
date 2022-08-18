import React from 'react'

import { actions } from '~/redux-store'
import { useAppDispatch } from '~/redux-store/hooks'
import { ItemType } from '~/redux-store/slices/types'

import S from './S'

export const Item = ({ id, title }: ItemType) => {
  const dispatch = useAppDispatch()

  const handleUnselect = () => {
    dispatch(actions.widget.unselectItem(id))
  }

  return (
    <S.Base>
      <S.Title>{title}</S.Title>
      <S.UnselectButton onClick={handleUnselect}>x</S.UnselectButton>
    </S.Base>
  )
}
