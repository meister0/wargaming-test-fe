import {
  ChangeEvent,
  MouseEvent,
  useEffect,
  useState,
} from 'react'

import { actions } from '~/redux-store'
import {
  useAppDispatch,
  useAppSelector,
} from '~/redux-store/hooks'
import { selectors } from '~/redux-store/selectors'
import { ItemType } from '~/redux-store/slices/types'

import { Item } from '../Item'
import { List } from './List'
import S from './S'

export type DialogProps = {
  onClose: (event: MouseEvent<HTMLElement>) => void
}
export const Dialog = ({ onClose }: DialogProps) => {
  const dispatch = useAppDispatch()
  const { items: initialItems, selectedItems: initialSelectedItems } =
    useAppSelector(selectors.widget.base)

  const [items, setItems] = useState<ItemType[]>(initialItems)
  const [selectedItems, setSelectedItems] =
    useState<ItemType[]>(initialSelectedItems)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState(0)

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(Number(event.target.value))
  }

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleUnselect = (id: number) => {
    setSelectedItems(
      selectedItems.filter((selectedItem) => selectedItem.id !== id),
    )
  }

  const handleSelectItem = (item: ItemType) => {
    if (selectedItems.some((selectedItem) => selectedItem.id === item.id)) {
      handleUnselect(item.id)
    } else {
      setSelectedItems([...selectedItems, item])
    }
  }

  const handleSave = (event: MouseEvent<HTMLElement>) => {
    dispatch(actions.widget.setSelectedItems(selectedItems))
    onClose(event)
  }

  useEffect(() => {
    setItems(
      initialItems.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) &&
          item.id + 1 > filter,
      ),
    )
  }, [search, filter, initialItems])
  return (
    <>
      <S.Base>
        <S.CloseButton onClick={onClose}>x</S.CloseButton>
        <S.Title>Диалог выбора элементов</S.Title>
        <S.Top>
          <S.InputWrapper>
            <S.InputName>Поиск</S.InputName>
            <S.Input
              type="search"
              value={search}
              onChange={handleSearchChange}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputName>Фильтр</S.InputName>
            <S.Select
              name="filter"
              value={filter}
              onChange={handleFilterChange}
            >
              <S.Option value={0}>Без фильтра</S.Option>
              <S.Option value={10}>Номер &gt;10</S.Option>
              <S.Option value={100}>Номер &gt;100</S.Option>
              <S.Option value={200}>Номер &gt;200</S.Option>
            </S.Select>
          </S.InputWrapper>
        </S.Top>
        <List
          items={items}
          selectedItems={selectedItems}
          onSelect={handleSelectItem}
        />
        <S.Bottom>
          <S.Description>Выбранные элементы на данный момент:</S.Description>
          <S.SelectedItemsList>
            {selectedItems.map((item) => (
              <Item key={item.id} item={item} onUnselect={handleUnselect} />
            ))}
          </S.SelectedItemsList>
          <S.Buttons>
            <S.SaveButton onClick={handleSave}>Сохранить</S.SaveButton>
            <S.CancelButton onClick={onClose}>Отмена</S.CancelButton>
          </S.Buttons>
        </S.Bottom>
      </S.Base>
    </>
  )
}
