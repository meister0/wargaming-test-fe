import React from 'react'

import S from './S'

export const Table = () => {
  return (
    <S.Base>
      <S.Wrapper>
        <S.Search>
          <S.Field type="search" />
        </S.Search>
        <S.Button />
      </S.Wrapper>
    </S.Base>
  )
}
