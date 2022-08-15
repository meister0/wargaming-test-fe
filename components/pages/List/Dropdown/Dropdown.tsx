import React, { useState } from 'react'

import { TagType } from '../List'
import S from './S'

export type DropdownProps<T> = {
  items: T[]
  selectedItem: T
  onClick: (id: number) => void
}

export const Dropdown = <T extends TagType>({
  items,
  onClick,
  selectedItem,
}: DropdownProps<T>) => {
  const [isOpen, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!isOpen)
  }

  const handleSelect = (id: number) => {
    onClick(id)
    handleOpen()
  }

  return (
    <S.Base>
      <S.Control onClick={handleOpen}>
        <S.Burger />
        <S.Text>{selectedItem.title}</S.Text>
      </S.Control>
      {isOpen && (
        <>
          <S.Menu>
            {items.map((item) => (
              <S.Item
                key={item.id}
                onClick={() => handleSelect(item.id)}
                isActive={item.id === selectedItem.id}
              >
                <S.Text>{item.title}</S.Text>
              </S.Item>
            ))}
          </S.Menu>
          <S.Overlay onClick={handleOpen} />
        </>
      )}
    </S.Base>
  )
}
