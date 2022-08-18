import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'

import { ItemType } from './types'

export type State = {
  items: ItemType[]
  selectedItems: ItemType[]
}

export const initialState: State = {
  items: [],
  selectedItems: [],
}

export const slice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<ItemType[]>) => {
      state.items = action.payload
    },
    setSelectedItems: (state, action: PayloadAction<ItemType[]>) => {
      state.selectedItems = action.payload
    },
    unselectItem: (state, action: PayloadAction<number>) => {
      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload,
      )
    },
  },
})

export const actions = {
  ...slice.actions,
}

export default slice.reducer
