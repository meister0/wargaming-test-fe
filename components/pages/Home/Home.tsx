import React from 'react'

import Link from 'next/link'
import { __ } from '~/helpers'

import S from './S'

const links = {
  '1. Search': '/search',
  '2. List': '/list',
  '3. Article': '/article',
  '4. Widget': '/widget',
} as const

export const Home = () => {
  return (
    <S.Base>
      {__.entries(links).map(([title, link]) => {
        return (
          <S.Wrapper key={link}>
            <Link href={link}>{title}</Link>
          </S.Wrapper>
        )
      })}
    </S.Base>
  )
}
