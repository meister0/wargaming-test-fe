import React from 'react'

import { __ } from '~/helpers'

import { Flex } from './Flex'
import { Float } from './Float'
import { Grid } from './Grid'
import S from './S'
import { Table } from './Table'

export const searchComponents = {
  flex: Flex,
  grid: Grid,
  float: Float,
  table: Table,
} as const

export const Search = () => {
  return (
    <S.Base>
      {__.entries(searchComponents).map(([key, Component]) => (
        <S.Wrapper key={key}>
          <S.Title>{key}</S.Title>
          <Component />
        </S.Wrapper>
      ))}
    </S.Base>
  )
}
