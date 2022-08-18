import {
  useEffect,
  useState,
} from 'react'

import {
  __,
  string,
} from '~/helpers'
import { actions } from '~/redux-store'
import {
  useAppDispatch,
  useAppSelector,
} from '~/redux-store/hooks'
import { selectors } from '~/redux-store/selectors'

import { Dialog } from './Dialog'
import { Item } from './Item'
import S from './S'

const ITEMS = Array.from({ length: 300 }).map((_, index) => ({
  title: `Элемент ${index + 1}`,
  id: index,
}))

export const Widget = () => {
  const [isDialogShown, showDialog] = useState(false)
  const dispatch = useAppDispatch()
  const selectedItems = useAppSelector(selectors.widget.selectedItems)
  const checkSelectedItemsLength = selectedItems.length !== 0

  const pluralizedItems = string.pluralize(selectedItems.length, [
    'элемент',
    'элемента',
    'элементов',
  ])

  const handleChangeMyMind = () => {
    showDialog(!isDialogShown)
  }

  useEffect(() => {
    dispatch(actions.widget.setItems(ITEMS))
    dispatch(actions.widget.setSelectedItems([ITEMS[3], ITEMS[5]]))
  }, [dispatch])

  return (
    <S.Base>
      <S.Title>Выбор элементов</S.Title>
      <S.Description>
        {checkSelectedItemsLength ? (
          <>На данный момент у вас выбрано {pluralizedItems}:</>
        ) : (
          <>У вас не выбрано никаких элементов :&apos;(</>
        )}
      </S.Description>
      {checkSelectedItemsLength && (
        <S.SelectedItemsList>
          {selectedItems.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </S.SelectedItemsList>
      )}
      <S.MainButton onClick={handleChangeMyMind}>
        Изменить мой выбор
      </S.MainButton>
      {isDialogShown && (
        <S.Wrapper>
          <Dialog onClose={handleChangeMyMind} />
        </S.Wrapper>
      )}
    </S.Base>
  )
}
